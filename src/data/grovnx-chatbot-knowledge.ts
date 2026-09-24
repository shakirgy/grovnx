/**
 * GrovNx Assistant knowledge base.
 *
 * This is the single place to edit chatbot answers. Add or change entries here;
 * the chat widget (src/components/chat/ChatAssistant.tsx) needs no changes.
 *
 * Each entry has:
 *  - id       : unique key
 *  - keywords : lowercase words/phrases that trigger the answer
 *  - answer   : markdown-lite text (lines starting with "- " render as bullets)
 *  - ctas     : optional call-to-action buttons ("pricing" | "features" | "contact" | "demo" | "whatsapp")
 */

export type CtaKey = "pricing" | "features" | "contact" | "demo" | "whatsapp";

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
  ctas?: CtaKey[];
};

export const WELCOME_MESSAGE =
  "Hi! 👋 I'm the GrovnX Assistant.\nI can help you with pricing, features, WhatsApp Business API, onboarding, and booking a demo.\nWhat would you like to know?";

export const QUICK_OPTIONS = [
  "Pricing",
  "Starter Plan",
  "Advance Plan",
  "WhatsApp API",
  "Features",
  "Book a Demo",
  "FAQs",
] as const;

export const FALLBACK_ANSWER =
  "I don't have enough information to answer that accurately.\nI can help you with GrovnX pricing, features, WhatsApp Business API, onboarding, or booking a demo.";

export const FALLBACK_CTAS: CtaKey[] = ["contact", "demo"];

export const DEMO_INTENT_ANSWER =
  "Absolutely. You can book a GrovnX demo and our team can walk you through the platform and recommend the right plan.";

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "about",
    keywords: ["what is grovnx", "about grovnx", "who are you", "what do you do", "platform", "company"],
    answer:
      "GrovnX is a customer communication and automation platform focused on WhatsApp Business API, team inbox, campaigns, chatbots and automation.\nIt's built for businesses that want to manage customer conversations, WhatsApp messaging, campaigns and team communication from one platform.",
    ctas: ["features", "demo"],
  },
  {
    id: "pricing",
    keywords: ["pricing", "price", "cost", "how much", "plans", "plan cost", "subscription", "charges"],
    answer:
      "GrovnX has two plans, and all subscription prices are inclusive of GST:\n- Starter: ₹1,799/month or ₹17,999/year\n- Advance: ₹2,999/month or ₹29,999/year\nAnnual billing gives you approximately 16% savings compared with paying monthly.\nWhatsApp conversation charges are usage-based and billed separately from the GrovnX subscription.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "starter",
    keywords: ["starter", "starter plan", "basic plan", "1799", "17999"],
    answer:
      "Starter is ₹1,799/month or ₹17,999/year (GST included, approximately 16% savings annually). It includes:\n- Blue Tick Verification Assistance\n- Team Inbox: Unlimited Agents\n- Chatbot: Unlimited Sessions, 10 chatbots\n- Broadcast Scheduling + Retargeting\n- WhatsApp Flows\n- Click to WhatsApp Ads Manager\n- Chat Support\n- API: Send Template Message",
    ctas: ["pricing", "demo"],
  },
  {
    id: "advance",
    keywords: ["advance", "advance plan", "advanced plan", "pro plan", "2999", "29999"],
    answer:
      "Advance is ₹2,999/month or ₹29,999/year (GST included, approximately 16% savings annually). It includes everything in Starter, plus:\n- Drip Campaign\n- Inbox: WhatsApp, Facebook & Instagram\n- Chatbot: Unlimited Chatbots & Triggers\n- Dedicated Relationship Manager\n- Full Developer APIs Access",
    ctas: ["pricing", "demo"],
  },
  {
    id: "compare",
    keywords: [
      "which plan",
      "recommend",
      "starter or advance",
      "difference between",
      "compare",
      "suitable plan",
      "right plan",
      "should i choose",
    ],
    answer:
      "Here's an honest way to decide:\n- Choose Starter if you mainly need WhatsApp communication, team inbox, a basic chatbot, broadcasts, WhatsApp Flows and core API functionality.\n- Choose Advance if you need drip campaigns, a Facebook + Instagram + WhatsApp inbox, unlimited chatbots and triggers, a Dedicated Relationship Manager, Full Developer APIs Access or more advanced automation.\nTell me what you're mainly looking for and I'll point you to the better fit.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "annual",
    keywords: ["annual", "yearly", "yearly billing", "savings", "discount on annual", "16%"],
    answer:
      "Annual billing gives you approximately 16% savings compared with paying monthly.\n- Starter: ₹17,999/year instead of ₹1,799/month\n- Advance: ₹29,999/year instead of ₹2,999/month\nAll subscription prices are inclusive of GST.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "gst",
    keywords: ["gst", "tax", "inclusive", "taxes"],
    answer: "All GrovnX subscription prices shown are inclusive of GST — the displayed price is the final price.",
    ctas: ["pricing"],
  },
  {
    id: "conversation-rates",
    keywords: [
      "conversation charges",
      "conversation rate",
      "per conversation",
      "marketing rate",
      "utility",
      "authentication",
      "message cost",
      "meta charges",
    ],
    answer:
      "WhatsApp conversation charges are usage-based and billed separately from the GrovnX subscription.\nOn monthly billing: Marketing ₹0.99, Utility ₹0.14, Authentication ₹0.14 per conversation.\nOn annual billing: Marketing ₹0.89, Utility ₹0.12, Authentication ₹0.12 per conversation.\nConversation rates may be subject to applicable WhatsApp/Meta pricing changes.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "whatsapp-api",
    keywords: ["whatsapp api", "whatsapp business api", "wa api", "business api", "whatsapp"],
    answer:
      "WhatsApp Business API is the core of GrovnX. It lets your business run customer conversations, templates, broadcasts, chatbots and automation from one platform, with a shared team inbox.\nWhat would you like to know — onboarding, numbers, documents or pricing?",
    ctas: ["whatsapp", "demo"],
  },
  {
    id: "existing-number",
    keywords: ["existing number", "current number", "my number", "same number"],
    answer:
      "In many cases, an existing number can be used, subject to Meta and WhatsApp eligibility and migration requirements. The GrovnX team can guide you through the process.",
    ctas: ["contact", "demo"],
  },
  {
    id: "new-number",
    keywords: ["new number", "another number", "fresh number"],
    answer: "Yes. A new eligible business number can be used for WhatsApp Business API onboarding.",
    ctas: ["demo"],
  },
  {
    id: "meta-business-account",
    keywords: ["meta business account", "business portfolio", "facebook business", "need meta account"],
    answer:
      "Yes. A Meta Business account/business portfolio is generally required for WhatsApp Business API onboarding.",
    ctas: ["demo"],
  },
  {
    id: "documents",
    keywords: ["documents", "document", "kyc", "gst certificate", "msme", "incorporation", "requirements"],
    answer:
      "Typical onboarding may require business information and documents such as GST, MSME, or incorporation details, along with website and Meta business information. Exact requirements can vary depending on the business and Meta's verification process.",
    ctas: ["contact", "demo"],
  },
  {
    id: "migration",
    keywords: ["migrate", "migration", "switch provider", "another provider", "move from"],
    answer:
      "Migration may be possible depending on your current setup and Meta/WhatsApp requirements. Contact the GrovnX team and we'll guide you.",
    ctas: ["contact", "demo"],
  },
  {
    id: "onboarding",
    keywords: ["onboarding", "how long", "setup time", "go live", "activation", "get started", "how to start"],
    answer:
      "Onboarding time can vary depending on Meta verification, business details, number setup, and other requirements. The GrovnX team will guide you through the process.",
    ctas: ["contact", "demo"],
  },
  {
    id: "features",
    keywords: ["features", "what features", "capabilities", "what can it do", "product features"],
    answer:
      "GrovnX brings your customer communication into one platform:\n- Shared Team Inbox for multiple agents\n- WhatsApp templates for business-initiated messages\n- Broadcast & campaigns for opted-in customers\n- Chatbots and automation\n- WhatsApp Flows and Click to WhatsApp Ads Manager\n- Advance adds a WhatsApp, Facebook & Instagram inbox, drip campaigns and full developer APIs",
    ctas: ["features", "demo"],
  },
  {
    id: "team-inbox",
    keywords: ["team inbox", "shared inbox", "agents", "inbox"],
    answer:
      "Team Inbox gives your team a centralized place to manage customer conversations and allows multiple agents to work from one platform.",
    ctas: ["features", "demo"],
  },
  {
    id: "templates",
    keywords: ["template", "templates", "message template"],
    answer:
      "WhatsApp templates are approved message formats used for eligible business-initiated WhatsApp communication.",
    ctas: ["features", "demo"],
  },
  {
    id: "broadcast",
    keywords: ["broadcast", "campaign", "campaigns", "bulk message", "retargeting"],
    answer:
      "They help businesses send planned WhatsApp communications and campaigns to opted-in customers, subject to WhatsApp policies.",
    ctas: ["features", "demo"],
  },
  {
    id: "automation",
    keywords: ["automation", "automate", "workflow", "trigger", "chatbot"],
    answer:
      "Automation helps reduce repetitive work by triggering predefined customer communication and workflows.",
    ctas: ["features", "demo"],
  },
  {
    id: "flows",
    keywords: ["whatsapp flows", "flows", "interactive"],
    answer: "WhatsApp Flows can create structured interactive experiences inside WhatsApp for supported use cases.",
    ctas: ["features", "demo"],
  },
  {
    id: "ctwa",
    keywords: ["click to whatsapp", "ads manager", "ads", "ctwa"],
    answer:
      "It helps businesses manage advertising flows designed to bring users from ads into WhatsApp conversations.",
    ctas: ["features", "demo"],
  },
  {
    id: "drip",
    keywords: ["drip", "drip campaign", "sequence", "journey"],
    answer:
      "Drip Campaigns allow businesses to plan and send a sequence of communications based on a defined customer journey. It's part of the Advance plan.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "social-inbox",
    keywords: ["facebook", "instagram", "social", "messenger"],
    answer: "Advance includes an inbox for WhatsApp, Facebook, and Instagram.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "apis",
    keywords: ["api access", "developer api", "apis", "integration", "webhook"],
    answer:
      "Full Developer APIs Access is included in the Advance plan. Starter includes the API for sending template messages.",
    ctas: ["pricing", "demo"],
  },
  {
    id: "custom-pricing",
    keywords: ["discount", "custom pricing", "reduce the price", "cheaper", "negotiate", "offer"],
    answer:
      "I can explain the current GrovnX plans and pricing, but I can't approve custom pricing. Please book a demo and the GrovnX team can discuss your requirements.",
    ctas: ["demo"],
  },
  {
    id: "meta-verification",
    keywords: ["guarantee meta", "meta verification", "green tick", "blue tick", "verification guarantee", "approval"],
    answer:
      "Meta verification and approval are subject to Meta's policies and review process. GrovnX can assist with the setup and submission process, but approval cannot be guaranteed.",
    ctas: ["contact", "demo"],
  },
  {
    id: "blocking",
    keywords: ["blocked", "ban", "banned", "block my account", "policy"],
    answer:
      "No platform can guarantee that. Businesses must follow WhatsApp and Meta policies and messaging requirements.",
    ctas: ["contact", "demo"],
  },
  {
    id: "competitors",
    keywords: ["better than", "interakt", "wati", "competitor", "compare with", "vs "],
    answer:
      "GrovnX provides WhatsApp Business API capabilities along with team inbox, automation, campaigns, chatbots and other customer communication tools. If you'd like, I can show you the GrovnX features in a demo.",
    ctas: ["demo"],
  },
  {
    id: "refund",
    keywords: ["refund", "money back", "cancel subscription", "cancellation"],
    answer:
      "Refund eligibility depends on GrovnX's applicable terms and the specific purchase. Please contact the GrovnX team for assistance.",
    ctas: ["contact"],
  },
  {
    id: "legal",
    keywords: ["legal advice", "lawyer", "contract review", "compliance law"],
    answer:
      "I can't provide legal advice. For questions about terms or compliance, please contact the GrovnX team.",
    ctas: ["contact"],
  },
  {
    id: "account-issue",
    keywords: ["my account", "not working", "issue", "bug", "error", "support ticket", "login"],
    answer:
      "For account-specific technical issues, the GrovnX team is the right place to help. Please reach out and they'll assist you.",
    ctas: ["contact"],
  },
  {
    id: "faqs",
    keywords: ["faq", "faqs", "common questions", "questions"],
    answer:
      "Happy to help. Common topics people ask about:\n- Pricing and GST-inclusive plans\n- WhatsApp conversation charges\n- Using an existing or new number\n- Meta business account and documents\n- Onboarding time and migration\n- Starter vs Advance features\nJust ask about any of these.",
    ctas: ["pricing", "features"],
  },
  {
    id: "contact",
    keywords: ["contact", "talk to team", "email", "phone", "reach you", "sales"],
    answer:
      "You can share your details with the GrovnX team through the contact page, or book a demo and we'll walk you through the platform.",
    ctas: ["contact", "demo"],
  },
];

/** Phrases that signal buying intent → route straight to the existing demo booking flow. */
export const DEMO_INTENT_KEYWORDS = [
  "demo",
  "book a demo",
  "schedule a demo",
  "see the product",
  "talk to someone",
  "want to buy",
  "i'm interested",
  "im interested",
  "interested",
  "purchase",
  "buy",
  "sign up",
  "trial",
];
