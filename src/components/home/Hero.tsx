import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroFlow } from "./HeroFlow";
import { BookDemoButton } from "@/components/demo/DemoBookingModal";

const capabilities = [
  "WhatsApp Business API",
  "Team Inbox",
  "Automation",
  "Campaigns",
  "Customer Communication",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <div className="absolute -top-24 -left-20 size-72 rounded-full bg-brand-soft blur-2xl" />
        <div className="absolute top-10 right-[8%] size-40 rounded-[2.5rem] rotate-12 bg-brand-soft" />
      </div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Business Technology Platform
          </span>
          <h1 className="mt-6 text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            We Plan. We Build. You Grow.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty max-w-[52ch]">
            Technology solutions designed around the way your business works — starting with
            WhatsApp Business API and evolving into smarter CRM, automation, AI, and business tools.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookDemoButton className="px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium ring-1 ring-brand hover:bg-brand-hover transition-all" />
            <Link
              to="/products/whatsapp-business-api"
              className="px-6 py-3 rounded-full bg-background text-foreground font-medium ring-1 ring-border hover:bg-muted transition-colors inline-flex items-center gap-2"
            >
              Explore WhatsApp API
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">{capabilities.join(" · ")}</p>
        </div>

        <HeroFlow />
      </div>
    </section>
  );
}
