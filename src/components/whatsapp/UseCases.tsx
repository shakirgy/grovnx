const useCases = [
  [
    "Customer Support",
    "Route inbound queries to a shared inbox, resolve with canned replies, and hand off between bot and agent without losing context.",
  ],
  [
    "Order & Delivery Notifications",
    "Confirmations, dispatch alerts and live tracking links sent the moment your system fires an event.",
  ],
  [
    "Lead Nurturing",
    "Drip journeys that qualify, educate and re-engage prospects with timed template sequences.",
  ],
  [
    "Abandoned Cart Recovery",
    "Nudge shoppers with the exact product, a discount code and a one-tap checkout button.",
  ],
  [
    "OTP & Verification",
    "Deliver authentication codes with copy-code buttons and auto-expiry copy at the lowest Meta rate.",
  ],
  [
    "Feedback & Reviews",
    "Post-purchase CSAT polls and review requests with quick-reply buttons that write back to your CRM.",
  ],
];

export function UseCases() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance max-w-[24ch]">
          What teams actually build on the WhatsApp API
        </h2>
        <p className="mt-4 text-muted-foreground max-w-[58ch] text-pretty">
          From first touch to repeat purchase, every conversation runs on one verified number.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {useCases.map(([title, body]) => (
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
  );
}
