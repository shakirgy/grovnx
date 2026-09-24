type Section = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-balance">{title}</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">{intro}</p>
        <div className="mt-12 flex flex-col gap-8">
          {sections.map((s) => (
            <article key={s.heading}>
              <h2 className="text-lg font-medium">{s.heading}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
