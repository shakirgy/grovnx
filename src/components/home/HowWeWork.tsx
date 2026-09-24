const steps = [
  { no: "01", title: "Understand", body: "We learn about your business and requirements." },
  { no: "02", title: "Plan", body: "We design the right solution and workflow." },
  { no: "03", title: "Build", body: "We configure and integrate the technology." },
  { no: "04", title: "Launch", body: "Your team gets onboarding and training." },
  { no: "05", title: "Grow", body: "Expand your solution as your business grows." },
];

export function HowWeWork() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          From idea to implementation.
        </h2>

        <ol className="mt-16 relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <span
            className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-border"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <li key={s.no} className="relative lg:pr-6">
              <span
                className="block size-[15px] rounded-full bg-background ring-1 ring-border relative"
                aria-hidden="true"
              >
                <span className="absolute inset-[4px] rounded-full bg-brand" />
              </span>
              <span className="mt-5 block text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                {s.no}
              </span>
              <h3 className="mt-1 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
