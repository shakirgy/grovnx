import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/whatsapp/LeadForm";

const TITLE = "Contact GrovnX — Book a Demo";
const DESCRIPTION =
  "Tell us about your team, messaging needs and workflow. We'll help you plan the right WhatsApp Business API setup for your business.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="px-6 pt-20 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Contact
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Have a business problem to solve?
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Tell us what you're trying to build. We'll help you figure out the technology behind
              it.
            </p>
          </div>
        </section>
        <LeadForm />
      </main>
      <SiteFooter />
    </div>
  );
}
