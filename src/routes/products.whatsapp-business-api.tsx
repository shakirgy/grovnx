import { createFileRoute, Link } from "@tanstack/react-router";

import { BookDemoButton } from "@/components/demo/DemoBookingModal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BookDemoCta } from "@/components/whatsapp/BookDemoCta";
import { Faq, faqs } from "@/components/whatsapp/Faq";
import { LeadForm } from "@/components/whatsapp/LeadForm";
import { PricingSection } from "@/components/whatsapp/PricingSection";
import { UseCases } from "@/components/whatsapp/UseCases";

const TITLE = "WhatsApp Business API Solution — GrovnX";
const DESC =
  "GrovnX provides WhatsApp Business API onboarding and implementation: shared team inbox, templates, campaigns, automation and support for your business.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const Route = createFileRoute("/products/whatsapp-business-api")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: WhatsAppApiPage,
});

const highlightCards = [
  {
    title: "Guided Onboarding",
    body: "We help you create your WhatsApp Business Account, verify your business and get your number live.",
    stat: "Setup",
  },
  {
    title: "Customer Engagement",
    body: "Talk to customers on the channel they already use, with templates, campaigns and two-way conversations.",
    stat: "Engage",
  },
  {
    title: "Dedicated Point of Contact",
    body: "A named person who understands your setup handles onboarding, changes and day-to-day questions.",
    stat: "1:1",
  },
];

const whyChoose = [
  {
    title: "Understand First",
    body: "We start by understanding your business and how your team handles customer conversations.",
  },
  {
    title: "Guided Setup",
    body: "WhatsApp Business Account creation, display-name approval and number onboarding, handled with you.",
  },
  {
    title: "Transparent Pricing",
    body: "WhatsApp Business Platform conversation rates passed through, billed per 24-hour session window.",
  },
  {
    title: "Built Around Your Workflow",
    body: "We configure inbox routing, templates and automation to match how your team already works.",
  },
  {
    title: "No-code Automation",
    body: "Build flows, chatbots and follow-up journeys visually, without writing code.",
  },
  {
    title: "Support as You Grow",
    body: "Ongoing help as your volumes, team size and use cases change.",
  },
];

const industries = [
  ["E-commerce & D2C", "Abandoned cart recovery, order tracking and COD confirmation flows."],
  ["Education", "Admission counselling, fee reminders and batch notifications."],
  ["Healthcare", "Appointment booking, prescription reminders and report delivery."],
  ["Real Estate", "Site-visit scheduling, brochure sharing and lead qualification."],
  ["Travel & Hospitality", "Booking confirmations, boarding passes and itinerary updates."],
  ["BFSI", "KYC nudges, statement alerts and secure OTP authentication."],
];

const crmCards = [
  ["Shared Team Inbox", "Assign, tag and resolve chats across unlimited agents from one screen."],
  ["Contact & Segments", "Attributes, tags and lists that stay in sync with every conversation."],
  ["Broadcast Manager", "Schedule template campaigns and track delivery, read and reply rates."],
  ["Chatbot Builder", "Drag-and-drop flows with keyword, button and AI-assisted replies."],
  ["Analytics & Reports", "Agent performance, conversation cost and funnel-level reporting."],
];

function WhatsAppApiPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      {/* 1. Heading */}
      <section className="px-6 pt-24 pb-20 bg-secondary border-b">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border text-xs font-semibold uppercase tracking-widest text-brand">
            Available now
          </span>
          <h1 className="mt-6 text-4xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance">
            WhatsApp Business API solution
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty max-w-[56ch] mx-auto">
            GrovnX handles WhatsApp Business API onboarding and implementation, then gives your team
            a shared inbox, templates, campaigns and automation in one workspace.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <BookDemoButton className="px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all" />
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-full font-medium border hover:bg-background transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Highlight cards */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid gap-y-10 md:grid-cols-3 lg:divide-x lg:divide-border reveal">
          {highlightCards.map((c) => (
            <article key={c.title} className="lg:px-10 lg:first:pl-0 lg:last:pr-0">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {c.stat}
              </span>
              <h2 className="mt-4 text-xl font-medium">{c.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Why choose GrovnX */}
      <section className="px-6 py-24 bg-secondary border-y">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 reveal">
          <div className="max-w-[44ch] lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Why GrovnX
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
              Why choose GrovnX as your WhatsApp Business API partner
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
              From onboarding to day-to-day operations, we stay involved in how the platform works
              for your team.
            </p>
          </div>
          <ol className="divide-y divide-border border-t border-border">
            {whyChoose.map((c, i) => (
              <li key={c.title} className="py-7 flex gap-6">
                <span className="text-xs font-semibold text-brand pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3b. Use cases */}
      <UseCases />

      {/* 4. Industry verticals */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto reveal">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Built for your industry vertical
          </h2>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {industries.map(([title, body]) => (
              <li
                key={title}
                className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 group"
              >
                <span className="sm:w-64 shrink-0 text-sm font-medium group-hover:text-brand transition-colors">
                  {title}
                </span>
                <span className="text-sm text-muted-foreground text-pretty">{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Pricing */}
      <PricingSection />

      {/* 6. WhatsApp CRM */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto reveal">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Your complete WhatsApp CRM
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {crmCards.map(([title, body]) => (
              <article
                key={title}
                className="border-l-2 border-border pl-5 hover:border-brand transition-colors"
              >
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Mobile app */}
      <section className="px-6 py-24 bg-brand-dark text-background border-y">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="max-w-[46ch]">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              GrovnX Mobile App
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Run your WhatsApp desk from your pocket
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty opacity-80">
              Reply to chats, send broadcasts and follow team activity on Android and iOS with
              real-time push notifications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full font-medium bg-brand text-primary-foreground hover:bg-brand-hover transition-all">
              Download for Android
            </button>
            <button className="px-6 py-3 rounded-full font-medium ring-1 ring-background/25 hover:bg-background/10 transition-colors">
              Download for iOS
            </button>
          </div>
        </div>
      </section>

      {/* 8. Lead capture */}
      <LeadForm />

      {/* 9. FAQ */}
      <Faq />

      <BookDemoCta />

      <SiteFooter />
    </div>
  );
}
