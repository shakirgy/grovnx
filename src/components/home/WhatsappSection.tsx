import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FeatureShowcase } from "./FeatureShowcase";

export function WhatsappSection() {
  return (
    <section className="px-6 py-28 bg-secondary border-y">
      <div className="max-w-7xl mx-auto reveal">
        <div className="max-w-[60ch]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Available now
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-balance">
            WhatsApp Business API, built for your business.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            Move beyond the WhatsApp Business App and give your sales, support, and marketing teams
            a more powerful way to communicate.
          </p>
        </div>

        <div className="mt-16">
          <FeatureShowcase />
        </div>

        <Link
          to="/products/whatsapp-business-api"
          className="mt-14 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all"
        >
          Explore WhatsApp Business API
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
