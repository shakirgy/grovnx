import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { CommunicationIntro } from "@/components/home/CommunicationIntro";
import { WhatsappSection } from "@/components/home/WhatsappSection";
import { CommunicationBreak } from "@/components/home/CommunicationBreak";
import { WhatsappUseCases } from "@/components/home/WhatsappUseCases";
import { WhyGrovnx } from "@/components/home/WhyGrovnx";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Roadmap } from "@/components/home/Roadmap";
import { Industries } from "@/components/home/Industries";
import { FinalCta } from "@/components/home/FinalCta";

const TITLE = "GrovnX — We Plan. We Build. You Grow.";
const DESCRIPTION =
  "Business technology solutions built around the way you work — starting with WhatsApp Business API for team inbox, automation and customer communication.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <CommunicationIntro />
        <WhatsappSection />
        <CommunicationBreak />
        <WhatsappUseCases />
        <WhyGrovnx />
        <HowWeWork />
        <Roadmap />
        <Industries />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
