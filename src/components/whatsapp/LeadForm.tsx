import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { leadSchema, submitLead } from "@/lib/lead-schemas";

type Errors = Partial<Record<string, string>>;

export function LeadForm() {
  const [companySize, setCompanySize] = useState("");
  const [volume, setVolume] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse({
      kind: "lead" as const,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      companySize,
      volume,
    });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({
        name: flat.name?.[0] ?? "",
        email: flat.email?.[0] ?? "",
        companySize: flat.companySize ? "Select a company size" : "",
        volume: flat.volume ? "Select a messaging volume" : "",
      });
      return;
    }
    setErrors({});
    setPending(true);
    const res = await submitLead(parsed.data);
    setPending(false);
    if (!res.ok) {
      toast.error(res.error ?? "Something went wrong");
      return;
    }
    setDone(true);
    toast.success("Thanks — we'll be in touch within one business day.");
  }

  return (
    <section id="get-pricing" className="px-6 py-24 bg-secondary border-y">
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2 items-start reveal">
        <div className="max-w-[46ch]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Talk to sales
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Get a volume-based quote for your account
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-pretty">
            Share a few details about your business and messaging needs. We'll recommend the
            right GrovnX plan and help you understand your expected conversation costs.
          </p>
        </div>

        <div className="p-8 bg-background border rounded-2xl">
          {done ? (
            <div className="py-8 text-center">
              <h3 className="text-lg font-medium">Request received</h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">
                Our team will reach out shortly with your quote and onboarding timeline.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="lead-name">Full name</Label>
                <Input id="lead-name" name="name" placeholder="Priya Sharma" maxLength={100} />
                {errors["name"] ? (
                  <p className="text-xs text-destructive">{errors["name"]}</p>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lead-email">Work email</Label>
                <Input
                  id="lead-email"
                  name="email"
                  type="email"
                  placeholder="priya@company.com"
                  maxLength={255}
                />
                {errors["email"] ? (
                  <p className="text-xs text-destructive">{errors["email"]}</p>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lead-size">Company size</Label>
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger id="lead-size">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1-10", "11-50", "51-200", "201-1000", "1000+"].map((s) => (
                      <SelectItem key={s} value={s}>
                        {s} employees
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors["companySize"] ? (
                  <p className="text-xs text-destructive">{errors["companySize"]}</p>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lead-volume">Monthly messaging volume</Label>
                <Select value={volume} onValueChange={setVolume}>
                  <SelectTrigger id="lead-volume">
                    <SelectValue placeholder="Select expected volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<10k">Under 10,000 messages</SelectItem>
                    <SelectItem value="10k-50k">10,000 – 50,000</SelectItem>
                    <SelectItem value="50k-250k">50,000 – 250,000</SelectItem>
                    <SelectItem value="250k+">250,000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors["volume"] ? (
                  <p className="text-xs text-destructive">{errors["volume"]}</p>
                ) : null}
              </div>
              <Button type="submit" disabled={pending} className="w-full rounded-full">
                {pending ? "Sending…" : "Get my quote"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
