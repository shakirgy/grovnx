import { MessageCircle, Users, Workflow, TrendingUp } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Connect", body: "Connect with customers through WhatsApp." },
  {
    icon: Users,
    title: "Collaborate",
    body: "Let your team manage customer conversations from one place.",
  },
  { icon: Workflow, title: "Automate", body: "Reduce repetitive communication with automation." },
  {
    icon: TrendingUp,
    title: "Grow",
    body: "Turn conversations into meaningful business opportunities.",
  },
];

export function CommunicationIntro() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto reveal">
        <div className="max-w-[60ch]">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Built for better customer communication
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            From the first enquiry to ongoing customer support, GrovnX helps businesses manage
            conversations, automate communication, and create better customer experiences.
          </p>
        </div>
        <div className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {features.map((f) => (
            <article key={f.title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <f.icon className="size-5 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
