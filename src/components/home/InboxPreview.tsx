import { CheckCheck } from "lucide-react";

const threads = [
  { name: "Aarav — Enquiry", preview: "Is the 2BHK still available?", tag: "Sales", active: true },
  { name: "Meera — Order #4821", preview: "Thanks, received it today.", tag: "Support" },
  { name: "Campaign · Festive Offer", preview: "Template delivered to 1 list", tag: "Marketing" },
];

/** Minimal shared-inbox illustration for the WhatsApp section. */
export function InboxPreview() {
  return (
    <figure className="w-full">
      <div className="rounded-3xl bg-background border shadow-[0_24px_60px_-30px_rgba(11,18,32,0.35)] overflow-hidden">
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
              <span className="size-2 rounded-full bg-border" />
            </span>
            <span className="text-sm font-medium">Team Inbox</span>
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand/10 text-brand font-medium">
            3 agents online
          </span>
        </div>
        <ul className="divide-y">
          {threads.map((t) => (
            <li
              key={t.name}
              className={`px-5 py-4 flex items-start gap-3 transition-colors ${
                t.active ? "bg-brand/5 border-l-2 border-l-brand" : "hover:bg-secondary"
              }`}
            >
              <span
                className={`mt-1.5 size-2 rounded-full ${t.active ? "bg-brand" : "bg-border"}`}
                aria-hidden="true"
              />
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-medium truncate">{t.name}</span>
                <span className="block text-xs text-muted-foreground truncate">{t.preview}</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t.tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="px-5 py-4 border-t bg-secondary flex items-center gap-2">
          <CheckCheck className="size-4 text-brand" aria-hidden="true" />
          <span className="text-xs text-muted-foreground">
            Templates, broadcasts and automation in the same workspace
          </span>
        </div>
      </div>
    </figure>
  );
}
