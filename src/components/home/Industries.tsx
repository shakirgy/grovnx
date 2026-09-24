const industries = [
  ["Real Estate", "Lead enquiries · Site visit follow-ups · Customer communication"],
  ["Healthcare", "Appointments · Reminders · Patient communication"],
  ["Education", "Admissions · Enquiries · Student communication"],
  ["Automotive", "Service reminders · Bookings · Customer support"],
  ["E-commerce", "Order updates · Customer support · Product communication"],
  ["Travel & Hospitality", "Bookings · Enquiries · Customer updates"],
];

export function Industries() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
          Built for businesses across industries.
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {industries.map(([name, example]) => (
            <li
              key={name}
              className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 group"
            >
              <span className="sm:w-56 shrink-0 text-sm font-medium group-hover:text-brand transition-colors">
                {name}
              </span>
              <span className="text-sm text-muted-foreground text-pretty">{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
