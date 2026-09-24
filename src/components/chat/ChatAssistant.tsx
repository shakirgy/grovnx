import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { openDemoModal } from "@/components/demo/DemoBookingModal";
import {
  DEMO_INTENT_ANSWER,
  DEMO_INTENT_KEYWORDS,
  FALLBACK_ANSWER,
  FALLBACK_CTAS,
  QUICK_OPTIONS,
  WELCOME_MESSAGE,
  knowledgeBase,
  type CtaKey,
} from "@/data/grovnx-chatbot-knowledge";

type Msg = {
  id: number;
  role: "user" | "assistant";
  text: string;
  ctas?: CtaKey[];
};

const CTA_LABELS: Record<CtaKey, string> = {
  pricing: "View Pricing",
  features: "View Features",
  contact: "Contact GrovnX",
  demo: "Book a Demo",
  whatsapp: "WhatsApp Business API",
};

function normalize(s: string) {
  return ` ${s.toLowerCase().replace(/[^a-z0-9₹%.\s']/g, " ").replace(/\s+/g, " ").trim()} `;
}

function isDemoIntent(text: string) {
  const t = normalize(text);
  return DEMO_INTENT_KEYWORDS.some((k) => t.includes(` ${k}`) || t.includes(k));
}

/** Keyword/intent matching against the maintainable knowledge base. */
function answerFor(input: string): { text: string; ctas: CtaKey[] } {
  const t = normalize(input);

  if (isDemoIntent(input)) return { text: DEMO_INTENT_ANSWER, ctas: ["demo"] };

  let best: { score: number; entry: (typeof knowledgeBase)[number] } | null = null;
  for (const entry of knowledgeBase) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (t.includes(kw.toLowerCase())) score = Math.max(score, kw.length);
    }
    if (score > 0 && (!best || score > best.score)) best = { score, entry };
  }

  if (!best) return { text: FALLBACK_ANSWER, ctas: FALLBACK_CTAS };
  return { text: best.entry.answer, ctas: best.entry.ctas ?? [] };
}

function MessageBody({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1">
      {lines.map((line, i) =>
        line.startsWith("- ") ? (
          <div key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" />
            <span>{line.slice(2)}</span>
          </div>
        ) : (
          <p key={i}>{line}</p>
        ),
      )}
    </div>
  );
}

function CtaButtons({ ctas, onDemo }: { ctas: CtaKey[]; onDemo: () => void }) {
  if (ctas.length === 0) return null;
  const base =
    "inline-flex items-center rounded-full border border-brand/30 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand/10";
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {ctas.map((c) => {
        if (c === "demo")
          return (
            <button key={c} type="button" className={base} onClick={onDemo}>
              {CTA_LABELS[c]}
            </button>
          );
        if (c === "pricing")
          return (
            <Link key={c} to="/pricing" className={base}>
              {CTA_LABELS[c]}
            </Link>
          );
        if (c === "contact")
          return (
            <Link key={c} to="/contact" className={base}>
              {CTA_LABELS[c]}
            </Link>
          );
        return (
          <Link key={c} to="/products/whatsapp-business-api" className={base}>
            {CTA_LABELS[c]}
          </Link>
        );
      })}
    </div>
  );
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const idRef = useRef(1);
  const [messages, setMessages] = useState<Msg[]>([
    { id: 0, role: "assistant", text: WELCOME_MESSAGE },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const showQuickOptions = useMemo(() => messages.length <= 1, [messages.length]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function send(raw: string) {
    const text = raw.trim();
    if (!text || typing) return;
    setInput("");
    setMessages((m) => [...m, { id: idRef.current++, role: "user", text }]);
    setTyping(true);
    window.setTimeout(() => {
      const { text: answer, ctas } = answerFor(text);
      setMessages((m) => [...m, { id: idRef.current++, role: "assistant", text: answer, ctas }]);
      setTyping(false);
      inputRef.current?.focus();
    }, 450);
  }

  function handleQuick(option: string) {
    if (option === "Book a Demo") {
      setMessages((m) => [
        ...m,
        { id: idRef.current++, role: "user", text: option },
        { id: idRef.current++, role: "assistant", text: DEMO_INTENT_ANSWER, ctas: ["demo"] },
      ]);
      return;
    }
    send(option);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Chat with us"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">Chat with us</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="GrovnX Assistant"
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden bg-background shadow-2xl",
            "inset-x-3 bottom-3 top-16 rounded-2xl border",
            "sm:inset-auto sm:bottom-5 sm:right-5 sm:top-auto sm:h-[560px] sm:max-h-[80vh] sm:w-[380px]",
          )}
        >
          <header className="flex items-start justify-between gap-3 bg-brand px-4 py-3 text-primary-foreground">
            <div>
              <p className="text-sm font-semibold tracking-tight">GrovnX Assistant</p>
              <p className="text-xs opacity-80">Instant answers about GrovnX</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 transition-colors hover:bg-white/15"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-brand text-primary-foreground"
                      : "bg-muted text-foreground",
                  )}
                >
                  <MessageBody text={m.text} />
                  {m.role === "assistant" && m.ctas ? (
                    <CtaButtons ctas={m.ctas} onDemo={openDemoModal} />
                  ) : null}
                </div>
              </div>
            ))}

            {showQuickOptions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_OPTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleQuick(q)}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {typing && (
              <div className="flex justify-start" aria-live="polite">
                <div className="flex items-center gap-1 rounded-2xl bg-muted px-3.5 py-3">
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  <span className="sr-only">Assistant is typing</span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t px-3 py-3"
          >
            <label htmlFor="grovnx-chat-input" className="sr-only">
              Type your question
            </label>
            <input
              id="grovnx-chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, features…"
              maxLength={300}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border bg-background px-4 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-brand"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || typing}
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground transition-colors hover:bg-brand-hover disabled:opacity-40"
            >
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
