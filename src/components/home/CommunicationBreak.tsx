const stages = [
  { label: "Enquiry", body: "A customer messages your business." },
  { label: "Conversation", body: "Your team replies from one shared inbox." },
  { label: "Automation", body: "Routine questions answered instantly." },
  { label: "Follow-up", body: "Reminders and updates sent on time." },
  { label: "Retention", body: "The relationship continues, not the ticket." },
];

export function CommunicationBreak() {
  return (
    <section className="px-6 py-24 bg-brand-dark text-background">
      <div className="max-w-7xl mx-auto reveal">
        <div className="max-w-[52ch]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            One continuous conversation
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Business communication shouldn't restart every time.
          </h2>
          <p className="mt-5 leading-relaxed text-pretty text-background/70">
            Every enquiry, reply and follow-up stays on the same thread, so your team always picks
            up where the customer left off.
          </p>
        </div>

        <ol className="mt-16 grid gap-y-10 md:grid-cols-5 relative">
          <span
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-background/15"
          />
          {stages.map((s, i) => (
            <li key={s.label} className="relative md:pr-8">
              <span
                aria-hidden="true"
                className={`block size-[15px] rounded-full border-2 ${
                  i === 0 ? "bg-brand border-brand" : "bg-brand-dark border-background/30"
                }`}
              />
              <h3 className="mt-5 text-sm font-medium">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-background/60">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
