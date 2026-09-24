import { Bell, Headset, Megaphone, Repeat, Target, Workflow } from "lucide-react";

const useCases = [
  {
    icon: Target,
    title: "Lead Generation",
    body: "Capture and respond to customer enquiries.",
  },
  {
    icon: Repeat,
    title: "Sales Follow-up",
    body: "Keep prospects engaged throughout the sales journey.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    body: "Give your support team a centralized communication channel.",
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Send reminders, confirmations, updates, and alerts.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    body: "Reach opted-in customers through WhatsApp campaigns.",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Reduce repetitive work with automated customer journeys.",
  },
];

export function WhatsappUseCases() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight max-w-[24ch] text-balance">
          Turn conversations into business workflows.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {useCases.map((u) => (
            <article
              key={u.title}
              className="
                group
                py-8
                px-8
                border-b border-border
                sm:border-r
                sm:[&:nth-child(2n)]:border-r-0
                lg:[&:nth-child(2n)]:border-r
                lg:[&:nth-child(3n)]:border-r-0
              "
            >
              <u.icon
                className="size-5 text-muted-foreground group-hover:text-brand transition-colors"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-lg font-medium">
                {u.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty max-w-[34ch]">
                {u.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}