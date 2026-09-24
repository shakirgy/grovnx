const points = [
  {
    title: "Understand First",
    body: "We start by understanding your business and communication process.",
  },
  {
    title: "Plan the Right Solution",
    body: "We recommend the right technology and workflow for your requirements.",
  },
  { title: "Build & Deploy", body: "We configure, integrate, and deploy the solution." },
  {
    title: "Support as You Grow",
    body: "Your requirements change. Your technology should evolve with your business.",
  },
];

export function WhyGrovnx({ as: Heading = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="px-6 py-24 bg-secondary border-y">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 reveal">
        <div className="max-w-[46ch] lg:sticky lg:top-24 lg:self-start">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Why GrovnX
          </span>
          <Heading className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Technology is easy. Building the right solution isn't.
          </Heading>
          <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
            We don't believe businesses should have to change the way they work just to use
            technology. We understand your requirements, plan the right solution, and help you
            implement it.
          </p>
          <p className="mt-8 text-sm font-medium">We Plan. We Build. You Grow.</p>
        </div>
        <ol className="divide-y divide-border border-t border-border">
          {points.map((p, i) => (
            <li key={p.title} className="py-7 flex gap-6">
              <span className="text-xs font-semibold text-brand pt-1 tabular-nums">0{i + 1}</span>
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
