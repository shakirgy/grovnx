import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Privacy Policy — GrovnX";
const DESCRIPTION =
  "How GrovnX (Grovsys Technologies) collects, uses and protects information shared through our website and business communication services.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <LegalPage
          title="Privacy Policy"
          intro="This page explains how Grovsys Technologies handles information shared with GrovnX. Contact us if you need a copy of the full policy for your compliance review."
          sections={[
            {
              heading: "Information we collect",
              body: "We collect the details you submit through our contact and demo forms, such as your name, work email, company and messaging requirements.",
            },
            {
              heading: "How we use information",
              body: "We use it to respond to your enquiry, plan a suitable solution, and provide onboarding and support for the services you request.",
            },
            {
              heading: "Sharing",
              body: "We do not sell your information. Data may be processed by the platform providers required to deliver the services you have asked for.",
            },
            {
              heading: "Your choices",
              body: "You can ask us to update or delete the information you have shared with us at any time by contacting our team.",
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
