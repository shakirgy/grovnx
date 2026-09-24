export type Billing = "monthly" | "annual";

export type Plan = {
  name: string;
  description: string;
  badge?: string;
  featured?: boolean;
  monthly: { price: string; period: string };
  annual: { price: string; period: string; equivalent: string; savings: string };
  featuresIntro?: string;
  features: string[];
  cta: { label: string; kind: "link" | "demo"; href?: string };
};

export const plans: Plan[] = [
  {
    name: "Starter",
    description: "Built for businesses ready to scale customer engagement.",
    monthly: { price: "₹1,799", period: "/month" },
    annual: {
      price: "₹17,999",
      period: "/year",
      equivalent: "₹1,500/month equivalent",
      savings: "Save 16%",
    },
    features: [
      "Blue Tick Verification Assistance",
      "Team Inbox: Unlimited Agents",
      "Chatbot: Unlimited Sessions, 10 chatbots",
      "Broadcast Scheduling + Retargeting",
      "WhatsApp Flows",
      "Click to WhatsApp Ads Manager",
      "Chat Support",
      "API: Send Template Message",
    ],
    cta: { label: "Get Started", kind: "link", href: "/contact" },
  },
  {
    name: "Advance",
    description: "Built for high-volume teams needing advanced automation.",
    badge: "Most Popular",
    featured: true,
    monthly: { price: "₹2,999", period: "/month" },
    annual: {
      price: "₹29,999",
      period: "/year",
      equivalent: "₹2,500/month equivalent",
      savings: "Save 16%",
    },
    featuresIntro: "Everything in Starter +",
    features: [
      "Drip Campaign",
      "Inbox: WhatsApp, Facebook & Instagram",
      "Chatbot: Unlimited Chatbots & Triggers",
      "Dedicated Relationship Manager",
      "Full Developer APIs Access",
    ],
    cta: { label: "Book a Demo", kind: "demo" },
  },
];

export type ConversationRate = {
  category: string;
  note: string;
  rate: string;
};

export const conversationRates: Record<Billing, ConversationRate[]> = {
  monthly: [
    { category: "Marketing", note: "Promotions, offers and re-engagement", rate: "₹0.96" },
    { category: "Utility", note: "Order, payment and account updates", rate: "₹0.14" },
    { category: "Authentication", note: "OTP and verification codes", rate: "₹0.14" },
  ],
  annual: [
    { category: "Marketing", note: "Promotions, offers and re-engagement", rate: "₹0.89" },
    { category: "Utility", note: "Order, payment and account updates", rate: "₹0.12" },
    { category: "Authentication", note: "OTP and verification codes", rate: "₹0.12" },
  ],
};
