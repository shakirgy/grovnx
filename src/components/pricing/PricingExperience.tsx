import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { BookDemoButton } from "@/components/demo/DemoBookingModal";
import { conversationRates, plans, type Billing } from "@/lib/pricing";

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (b: Billing) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-full bg-background border">
      {(["monthly", "annual"] as const).map((option) => {
        const active = billing === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              active ? "bg-brand text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option}
            {option === "annual" ? (
              <span className={`ml-2 text-xs ${active ? "opacity-80" : "text-brand"}`}>
                Save 16%
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function PricingExperience() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const annual = billing === "annual";

  return (
    <>
      {/* Subscription plans */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto reveal">
          <div className="flex justify-center">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 items-stretch">
            {plans.map((plan) => {
              const tier = annual ? plan.annual : plan.monthly;
              return (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl flex flex-col ${
                    plan.featured
                      ? "bg-background border-2 border-brand ring-4 ring-brand/10"
                      : "bg-background border"
                  }`}
                >
                  {plan.badge ? (
                    <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-brand text-primary-foreground text-xs font-semibold">
                      {plan.badge}
                    </span>
                  ) : null}

                  <h3 className="text-lg font-medium">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight tabular-nums">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  </div>

                  <div className="mt-2 h-5">
                    {annual ? (
                      <p className="text-xs text-muted-foreground">
                        {plan.annual.equivalent}
                        <span className="ml-2 font-medium text-brand">{plan.annual.savings}</span>
                      </p>
                    ) : null}
                  </div>

                  {plan.featuresIntro ? (
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand">
                      {plan.featuresIntro}
                    </p>
                  ) : (
                    <div className="mt-6" />
                  )}

                  <ul className="mt-3 space-y-2.5 text-sm flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.cta.kind === "demo" ? (
                    <BookDemoButton className="mt-8 w-full px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all">
                      {plan.cta.label}
                    </BookDemoButton>
                  ) : (
                    <Link
                      to={plan.cta.href ?? "/contact"}
                      className="mt-8 w-full px-6 py-3 rounded-full border border-brand text-brand text-center font-medium hover:bg-brand hover:text-primary-foreground transition-all"
                    >
                      {plan.cta.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            All subscription prices are inclusive of GST.
          </p>
        </div>
      </section>

      {/* Conversation charges */}
      <section className="px-6 py-24 bg-secondary border-y">
        <div className="max-w-5xl mx-auto reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Conversation Charges</h2>
              <p className="mt-4 text-muted-foreground max-w-[56ch] text-pretty">
                Usage-based WhatsApp conversation charges, billed separately from your
                subscription per 24-hour conversation window.
              </p>
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              Showing {annual ? "annual" : "monthly"} billing rates
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {conversationRates[billing].map((row) => (
              <div key={row.category} className="p-6 rounded-2xl bg-background border">
                <h3 className="text-sm font-medium">{row.category}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{row.note}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-semibold tracking-tight text-brand tabular-nums">
                    {row.rate}
                  </span>
                  <span className="text-xs text-muted-foreground">/ conversation</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Conversation charges are usage-based and subject to applicable WhatsApp/Meta rates.
            Rates may change.
          </p>
        </div>
      </section>
    </>
  );
}
