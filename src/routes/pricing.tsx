import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FinalCta } from "@/components/home/FinalCta";
import { PricingExperience } from "@/components/pricing/PricingExperience";

const TITLE = "Pricing — Plans Built for the Way You Communicate | GrovNx";
const DESCRIPTION =
  "Choose the right GrovnX plan for your team. Transparent INR subscription pricing with GST included, plus usage-based WhatsApp conversation charges.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Pricing
          </span>
          <h1 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-balance">
            Plans built for the way you communicate.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Choose the right GrovnX plan for your team and scale your customer communication
            with transparent subscription and conversation pricing.
          </p>
        </div>
      </section>

      <PricingExperience />

      <FinalCta />

      <SiteFooter />
    </div>
  );
}
