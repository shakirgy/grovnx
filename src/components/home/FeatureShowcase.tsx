import { useState } from "react";
import { ArrowRight, Inbox, FileText, Megaphone, Workflow, BarChart3 } from "lucide-react";

import { cn } from "@/lib/utils";

type Feature = {
  id: string;
  title: string;
  body: string;
  icon: typeof Inbox;
  /** Product screenshot. Leave empty until the real asset is available. */
  image?: string;
};

const features: Feature[] = [
  {
    id: "team-inbox",
    title: "Shared Team Inbox",
    body: "Manage customer conversations from one centralized workspace.",
    icon: Inbox,
  },
  {
    id: "templates",
    title: "WhatsApp Templates",
    body: "Create and manage approved business message templates.",
    icon: FileText,
  },
  {
    id: "campaigns",
    title: "Broadcast & Campaigns",
    body: "Reach opted-in customers with targeted WhatsApp communication.",
    icon: Megaphone,
  },
  {
    id: "automation",
    title: "Automation",
    body: "Automate repetitive customer conversations and workflows.",
    icon: Workflow,
  },
  {
    id: "analytics",
    title: "Analytics",
    body: "Understand communication and campaign activity.",
    icon: BarChart3,
  },
];

export function FeatureShowcase() {
  const first = features[0]!;
  const [activeId, setActiveId] = useState(first.id);
  const active = features.find((f) => f.id === activeId) ?? first;

  return (
    <div className="grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
      {/* Feature selector */}
      <div
        role="tablist"
        aria-label="GrovnX product features"
        aria-orientation="vertical"
        className="order-1 flex flex-col gap-1"
      >
        {features.map((f) => {
          const isActive = f.id === active.id;
          const Icon = f.icon;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              id={`feature-tab-${f.id}`}
              aria-selected={isActive}
              aria-controls="feature-screenshot-panel"
              onClick={() => setActiveId(f.id)}
              className={cn(
                "group cursor-pointer text-left rounded-2xl px-4 py-4 min-h-14 flex items-start gap-3 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "bg-brand/10 text-brand"
                  : "hover:bg-background/70 text-foreground hover:text-brand",
              )}
            >
              <Icon
                className={cn(
                  "size-5 shrink-0 mt-0.5 transition-colors",
                  isActive ? "text-brand" : "text-muted-foreground group-hover:text-brand",
                )}
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-medium">{f.title}</span>
                  <ArrowRight
                    className={cn(
                      "size-3.5 shrink-0 transition-all",
                      isActive
                        ? "opacity-100 text-brand"
                        : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-brand",
                    )}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className={cn(
                    "mt-1 block text-sm leading-relaxed text-pretty",
                    isActive ? "text-brand/80" : "text-muted-foreground",
                  )}
                >
                  {f.body}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Screenshot frame */}
      <div
        id="feature-screenshot-panel"
        role="tabpanel"
        aria-labelledby={`feature-tab-${active.id}`}
        className="order-2 w-full lg:sticky lg:top-24"
      >
        <div className="rounded-3xl border bg-background shadow-[0_24px_60px_-30px_rgba(31,17,25,0.35)] overflow-hidden">
          <div className="aspect-[16/10] w-full bg-secondary">
            {active.image ? (
              <img
                key={active.id}
                src={active.image}
                alt={`${active.title} screen in the GrovnX product`}
                loading="lazy"
                className="h-full w-full object-contain animate-in fade-in zoom-in-95 duration-300"
              />
            ) : (
              <div
                key={active.id}
                className="h-full w-full grid place-items-center px-6 text-center animate-in fade-in duration-300"
              >
                <p className="text-sm text-muted-foreground">
                  {active.title} screenshot
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
