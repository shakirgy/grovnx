import { z } from "zod";

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

export async function submitLead(payload: unknown): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/public/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    return { ok: false, error: data?.error ?? "Submission failed. Please try again." };
  }
  return { ok: true };
}
