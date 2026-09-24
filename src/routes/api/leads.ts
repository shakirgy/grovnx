import { createFileRoute } from "@tanstack/react-router";

import { submissionSchema } from "@/lib/lead-schemas";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzEoThGQTEb256FPXK_vYCKtQbValoQP6H6v0UemPbnPh5U766FpTTa_To-V8FMJithIw/exec";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json(
            { ok: false, error: "Invalid JSON body" },
            { status: 400, headers: corsHeaders },
          );
        }

        const parsed = submissionSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, errors: parsed.error.flatten().fieldErrors },
            { status: 400, headers: corsHeaders },
          );
        }

        const d = parsed.data;
        const row: Record<string, string> = {
          "Full name": d.name,
          "Work email": d.email,
          "Company size": d.kind === "lead" ? d.companySize : "",
          "Monthly messaging volume": d.kind === "lead" ? d.volume : "",
          Kind: d.kind,
          Phone: d.kind === "demo" ? d.phone : "",
          "Preferred date": d.kind === "demo" ? d.date : "",
          "Time slot": d.kind === "demo" ? d.slot : "",
          Timestamp: new Date().toISOString(),
        };

        // Send both form-encoded fields (e.parameter) and a JSON payload field
        // (e.parameter.payload / e.postData) so the Apps Script can read either.
        const form = new URLSearchParams(row);
        form.set("payload", JSON.stringify(row));

        try {
          const sheetRes = await fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
            body: form.toString(),
          });
          if (!sheetRes.ok) {
            const text = await sheetRes.text();
            console.error(`[leads] sheet request failed [${sheetRes.status}]: ${text}`);
            return Response.json(
              { ok: false, error: "Could not save your details. Please try again." },
              { status: 502, headers: corsHeaders },
            );
          }
        } catch (err) {
          console.error("[leads] sheet request threw", err);
          return Response.json(
            { ok: false, error: "Could not save your details. Please try again." },
            { status: 502, headers: corsHeaders },
          );
        }

        return Response.json({ ok: true }, { status: 200, headers: corsHeaders });
      },
    },
  },
});
