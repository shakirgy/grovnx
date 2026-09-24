import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LegalPage } from "@/components/LegalPage";

const TITLE = "Terms & Conditions — GrovnX";
const DESCRIPTION =
  "The terms that apply to the GrovnX website and to business communication services provided by Grovsys Technologies.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <LegalPage
          title="Terms & Conditions"
          intro="These terms apply to the use of the GrovnX website and services provided by Grovsys Technologies. A signed service agreement takes precedence where one exists."
          sections={[
            {
              heading: "Use of the website",
              body: "Content on this website is provided for information purposes. Product availability, features and roadmap items may change.",
            },
            {
              heading: "Services",
              body: "Scope, timelines and commercials for any solution we deliver are agreed in writing before implementation begins.",
            },
            {
              heading: "Third-party platforms",
              body: "Services delivered on third-party platforms, including the WhatsApp Business Platform, remain subject to those providers' own policies and pricing.",
            },
            {
              heading: "Contact",
              body: "For questions about these terms, reach out through our contact page.",
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
