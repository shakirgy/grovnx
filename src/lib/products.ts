import {
  Users,
  MessageCircle,
  Sparkles,
  Megaphone,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  /** "live" products have their own route file; "soon" render the placeholder. */
  status: "live" | "soon";
  accent: string;
  highlights: string[];
};

/**
 * Single source of truth for the Solutions menu, footer links and
 * the dynamic /products/$slug placeholder pages.
 */
export const products: Product[] = [
  {
    slug: "whatsapp-business-api",
    name: "WhatsApp Business API",
    icon: MessageCircle,
    tagline: "Official WhatsApp Business API onboarding and business communication solution.",
    description:
      "Give sales, support and marketing teams one place to talk to customers on WhatsApp — shared inbox, templates, campaigns and automation.",
    status: "live",
    accent: "bg-brand-soft",
    highlights: [
      "Shared team inbox with multiple agents",
      "Message templates, broadcasts and campaigns",
      "Automation and conversation analytics",
    ],
  },
  {
    slug: "crm",
    name: "CRM",
    icon: Users,
    tagline: "Customers, leads and follow-ups in one workspace.",
    description:
      "Manage customers, leads, follow-ups and sales activity from one workspace, connected to your WhatsApp conversations.",
    status: "soon",
    accent: "bg-brand-soft",
    highlights: [
      "Unified customer timeline",
      "Pipelines, tasks and follow-up reminders",
      "Segments that feed WhatsApp campaigns",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    icon: Sparkles,
    tagline: "Automate customer interactions and repetitive workflows.",
    description:
      "Use AI to automate customer interactions and repetitive business workflows, with a human handover whenever it matters.",
    status: "soon",
    accent: "bg-brand-soft",
    highlights: [
      "Assisted replies for support teams",
      "Workflow automation across channels",
      "Human handover with full context",
    ],
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    icon: Megaphone,
    tagline: "Smarter campaigns and customer engagement workflows.",
    description:
      "Build smarter campaigns and customer engagement workflows around the conversations you already have.",
    status: "soon",
    accent: "bg-brand-soft",
    highlights: [
      "Journey builder for opted-in customers",
      "Campaign scheduling and audiences",
      "Engagement reporting",
    ],
  },
  {
    slug: "integrations",
    name: "Integrations",
    icon: Plug,
    tagline: "Connect GrovnX with the tools your business already uses.",
    description:
      "Connect GrovnX with the tools your business already uses, so customer data stays in sync.",
    status: "soon",
    accent: "bg-brand-soft",
    highlights: [
      "Connect existing business systems",
      "Webhooks and APIs",
      "Keep customer data in sync",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
