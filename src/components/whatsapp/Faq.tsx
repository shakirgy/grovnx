import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  [
    "How long does Meta approval take?",
    "Business verification typically completes in 1–3 business days once your legal documents and website details match Meta's records. We pre-check everything before submission to avoid rejections.",
  ],
  [
    "How fast can we go live?",
    "Most accounts are messaging within 24 hours: WABA creation, number registration and display-name approval are handled by your relationship manager on the same day.",
  ],
  [
    "What is the actual message delivery time?",
    "Messages route through Meta's cloud API with sub-second delivery under normal conditions, and delivery, read and reply states stream back to your inbox in real time.",
  ],
  [
    "How long does template approval take?",
    "Utility and authentication templates are usually approved in minutes; marketing templates can take a few hours. We review copy against Meta policy before you submit.",
  ],
  [
    "How does pricing actually work?",
    "GrovnX plans start at ₹1,799/month with GST included, plus usage-based conversation charges billed per 24-hour window by category. Annual billing saves 16% on both subscription and conversation rates.",
  ],
  [
    "What does CRM setup involve?",
    "We import your contacts, map attributes and tags, connect your store or ERP via webhook, and configure the shared inbox, routing rules and first chatbot flow with you.",
  ],
  [
    "Can we port an existing WhatsApp number?",
    "Yes. A number on the WhatsApp Business app or another provider can be migrated with minimal downtime, keeping your display name and green tick where applicable.",
  ],
  [
    "Is support included?",
    "Every account gets a named relationship manager plus 24x7 human support over chat, call and WhatsApp. No per-ticket charges.",
  ],
];

export function Faq() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
