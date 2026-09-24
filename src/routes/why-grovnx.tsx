import { createFileRoute, Link } from "@tanstack/react-router";
import { BookDemoButton } from "@/components/demo/DemoBookingModal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhyGrovnx } from "@/components/home/WhyGrovnx";
import { HowWeWork } from "@/components/home/HowWeWork";

const TITLE = "Why GrovnX — We Plan. We Build. You Grow.";
const DESCRIPTION =
  "We understand your requirements, plan the right solution, and help you implement it — starting with WhatsApp Business API.";

export const Route = createFileRoute("/why-grovnx")({
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
  component: WhyGrovnxPage,
});

function WhyGrovnxPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <WhyGrovnx as="h1" />
        <HowWeWork />
        <section className="px-6 py-20 text-center">
          <BookDemoButton className="inline-flex px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all" />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
