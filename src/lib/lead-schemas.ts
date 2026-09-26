import { z } from "zod";

export const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzEoThGQTEb256FPXK_vYCKtQbValoQP6H6v0UemPbnPh5U766FpTTa_To-V8FMJithIw/exec";

export const demoRequestSchema = z.object({
  kind: z.literal("demo"),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  date: z.string().trim().min(1, "Pick a preferred date").max(30),
  slot: z.string().trim().min(1, "Select a time slot").max(40),
});

export const leadSchema = z.object({
  kind: z.literal("lead"),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"]),
  volume: z.enum(["<10k", "10k-50k", "50k-250k", "250k+"]),
});

export const submissionSchema = z.discriminatedUnion("kind", [demoRequestSchema, leadSchema]);

export type DemoRequest = z.infer<typeof demoRequestSchema>;
export type Lead = z.infer<typeof leadSchema>;

function buildSheetParams(data: DemoRequest | Lead): URLSearchParams {
  const row: Record<string, string> = {
    "Full name": data.name,
    "Work email": data.email,
    "Company size": data.kind === "lead" ? data.companySize : "",
    "Monthly messaging volume": data.kind === "lead" ? data.volume : "",
    Kind: data.kind,
    Phone: data.kind === "demo" ? data.phone : "",
    "Preferred date": data.kind === "demo" ? data.date : "",
    "Time slot": data.kind === "demo" ? data.slot : "",
    Timestamp: new Date().toISOString(),
  };

  const form = new URLSearchParams(row);
  form.set("payload", JSON.stringify(row));
  return form;
}

async function submitDirectToSheet(data: DemoRequest | Lead): Promise<{ ok: boolean; error?: string }> {
  try {
    const form = buildSheetParams(data);
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    return { ok: true };
  } catch (err) {
    console.error("Direct sheet submission failed:", err);
    return { ok: false, error: "Could not submit. Please check your connection and try again." };
  }
}

export async function submitLead(payload: unknown): Promise<{ ok: boolean; error?: string }> {
  const parsed = submissionSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, error: "Please check your form inputs." };
  }

  try {
    const res = await fetch("/api/public/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // If /api/public/leads is a 404 (static/exported hosting) or fails, fallback directly to Google Sheet
    if (res.status === 404 || !res.ok) {
      return await submitDirectToSheet(parsed.data);
    }

    return { ok: true };
  } catch {
    // If network or endpoint fails completely, fallback directly to Google Sheet
    return await submitDirectToSheet(parsed.data);
  }
}
