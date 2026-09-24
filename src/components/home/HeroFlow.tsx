import { ArrowDown, Headset, MessageCircle, User, Workflow, LineChart } from "lucide-react";

const outcomes = [
  { icon: LineChart, label: "Sales" },
  { icon: Headset, label: "Support" },
  { icon: Workflow, label: "Automation" },
];

function Node({
  icon: Icon,
  title,
  note,
  highlight = false,
}: {
  icon: typeof User;
  title: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full flex items-center gap-3 rounded-2xl px-5 py-4 border transition-colors ${
        highlight
          ? "bg-background border-brand/40 shadow-[0_16px_40px_-24px_rgba(13,110,253,0.55)]"
          : "bg-background border-border"
      }`}
    >
      <span
        className={`grid place-items-center size-9 rounded-xl ${
          highlight ? "bg-brand text-primary-foreground" : "bg-secondary text-muted-foreground"
        }`}
      >
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-muted-foreground">{note}</span>
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden="true">
      <span className="h-4 w-px bg-border" />
      <ArrowDown className="size-3.5 text-muted-foreground" />
    </div>
  );
}

/** Minimal flow illustration: Customer → WhatsApp → GrovnX → Sales · Support · Automation */
export function HeroFlow() {
  return (
    <figure className="w-full">
      <div className="rounded-3xl bg-secondary border p-6 sm:p-10">
        <div className="max-w-sm mx-auto flex flex-col">
          <Node icon={User} title="Customer" note="Starts a conversation" />
          <Connector />
          <Node icon={MessageCircle} title="WhatsApp" note="Business messaging channel" />
          <Connector />
          <Node icon={Workflow} title="GrovnX" note="Inbox, templates, automation" highlight />
          <Connector />
          <div className="grid grid-cols-3 gap-2">
            {outcomes.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl bg-background border px-2 py-4 flex flex-col items-center gap-2"
              >
                <o.icon className="size-4 text-brand" aria-hidden="true" />
                <span className="text-xs font-medium">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted-foreground">
        GrovnX connects customer conversations with your business teams and automation.
      </figcaption>
    </figure>
  );
}
