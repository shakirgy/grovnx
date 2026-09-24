import { useEffect, useState, useSyncExternalStore } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { demoRequestSchema, submitLead } from "@/lib/lead-schemas";

export const TIME_SLOTS = [
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 1:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
  "5:00 PM – 6:00 PM",
] as const;

type Errors = Partial<Record<"name" | "email" | "phone" | "date" | "slot", string>>;

/** Tiny global store so any CTA on any page can open the single shared modal. */
const listeners = new Set<() => void>();
let openRequests = 0;

export function openDemoModal() {
  openRequests += 1;
  listeners.forEach((l) => l());
}

function useOpenRequests() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => openRequests,
    () => 0,
  );
}

/** Mount once (in the root layout). Renders the single shared demo modal. */
export function DemoModalProvider({ children }: { children?: React.ReactNode }) {
  const requests = useOpenRequests();
  const [seen, setSeen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (requests > seen) {
      setSeen(requests);
      setIsOpen(true);
    }
  }, [requests, seen]);

  return (
    <>
      {children}
      <DemoBookingModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}

/** Any element that should open the shared demo modal. */
export function BookDemoButton({
  className,
  children = "Book a Demo",
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openDemoModal();
      }}
    >
      {children}
    </button>
  );
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function DemoBookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function reset() {
    setName("");
    setEmail("");
    setPhone("");
    setDate(undefined);
    setSlot("");
    setErrors({});
    setFormError(null);
    setDone(false);
    setPending(false);
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) setTimeout(reset, 200);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const local: Errors = {};
    if (!date) local.date = "Pick a preferred date";
    if (!slot) local.slot = "Select a time slot";

    const parsed = demoRequestSchema.safeParse({
      kind: "demo" as const,
      name,
      email,
      phone,
      date: date ? format(date, "yyyy-MM-dd") : "",
      slot,
    });

    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      for (const [k, v] of Object.entries(flat)) {
        if (v?.[0]) local[k as keyof Errors] = v[0];
      }
    }

    if (Object.keys(local).length > 0) {
      setErrors(local);
      return;
    }

    setErrors({});
    setPending(true);
    const res = await submitLead(parsed.success ? parsed.data : null);
    setPending(false);

    if (!res.ok) {
      setFormError(res.error ?? "Something went wrong. Please try again.");
      return;
    }

    setDone(true);
    toast.success("Demo request received", {
      description: "Our team will contact you shortly to confirm your demo.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-sm:max-w-[calc(100vw-2rem)] rounded-2xl max-h-[90vh] overflow-y-auto">
        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto size-12 text-brand" aria-hidden="true" />
            <DialogHeader className="mt-4">
              <DialogTitle className="text-center tracking-tight">
                Demo request received
              </DialogTitle>
              <DialogDescription className="text-center">
                Thanks! Our team will contact you shortly to confirm your demo.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-6 rounded-full" onClick={() => handleOpenChange(false)} autoFocus>
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="tracking-tight">Book a demo</DialogTitle>
              <DialogDescription>
                Pick a time and a GrovnX specialist will walk you through the platform.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <Field id="demo-name" label="Full name" error={errors.name}>
                <Input
                  id="demo-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  maxLength={100}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
              </Field>

              <Field id="demo-email" label="Work email" error={errors.email}>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  maxLength={255}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
              </Field>

              <Field id="demo-phone" label="Phone number" error={errors.phone}>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  maxLength={30}
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="demo-date" label="Preferred date" error={errors.date}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="demo-date"
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                        aria-invalid={!!errors.date}
                      >
                        <CalendarIcon className="size-4" aria-hidden="true" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={{ before: startOfToday() }}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>

                <Field id="demo-slot" label="Preferred time slot" error={errors.slot}>
                  <Select value={slot} onValueChange={setSlot}>
                    <SelectTrigger id="demo-slot" aria-invalid={!!errors.slot}>
                      <SelectValue placeholder="Select a slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              {formError ? (
                <p role="alert" className="text-sm text-destructive">
                  {formError}
                </p>
              ) : null}

              <Button type="submit" disabled={pending} className="w-full rounded-full">
                {pending ? "Booking..." : "Book demo"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
