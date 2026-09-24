import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FinalCta } from "@/components/home/FinalCta";
import { products } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GrovnX — We Plan. We Build. You Grow." },
      {
        name: "description",
        content:
          "GrovnX is a business technology team from Grovsys Technologies, starting with WhatsApp Business API and building toward a broader platform.",
      },
      { property: "og:title", content: "About GrovnX — We Plan. We Build. You Grow." },
      {
        property: "og:description",
        content:
          "How GrovnX plans, builds and supports business technology, starting with WhatsApp Business API.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Focused on outcomes",
    body: "We plan around the outcome you need, not a feature list. Every rollout starts with your process.",
  },
  {
    title: "Compliant by default",
    body: "Approved message templates, opt-in capture and clear records are part of every implementation.",
  },
  {
    title: "Built with operators",
    body: "We work alongside the sales and support teams who use the system every day.",
  },
  {
    title: "Support as you grow",
    body: "Support continues after launch, as your volumes, team and use cases change.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="px-6 pt-24 pb-20">
          <div className="max-w-7xl mx-auto reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              About GrovnX
            </span>
            <h1 className="mt-5 text-4xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance max-w-[20ch]">
              Business technology built around the way you work
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-pretty max-w-[62ch]">
              GrovnX is the business technology practice of Grovsys Technologies. We start by
              understanding how your team works, plan the right solution, and help you implement
              it. Today that means WhatsApp Business API for customer communication, with CRM,
              automation and integrations in development.
            </p>
          </div>
        </section>

        <section className="px-6 py-24 bg-secondary border-y">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 reveal">
            <div className="max-w-[44ch] lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
                What we care about
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                A small set of principles that decide how we plan, build and support every project.
              </p>
              <p className="mt-8 text-sm font-medium">We Plan. We Build. You Grow.</p>
            </div>
            <ol className="divide-y divide-border border-t border-border">
              {values.map((v, i) => (
                <li key={v.title} className="py-7 flex gap-6">
                  <span className="text-xs font-semibold text-brand pt-1 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                      {v.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="max-w-7xl mx-auto reveal">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
              What we build
            </h2>
            <ul className="mt-12 divide-y divide-border border-y border-border">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 group"
                  >
                    <span className="flex items-center gap-3 sm:w-72 shrink-0">
                      <p.icon
                        className="size-4 text-brand shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium group-hover:text-brand transition-colors">
                        {p.name}
                      </span>
                      {p.status === "soon" && (
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          Soon
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-muted-foreground text-pretty">{p.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
