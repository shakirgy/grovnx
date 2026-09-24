import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export function Roadmap() {
  const upcoming = products.filter((p) => p.status === "soon");

  return (
    <section className="px-6 py-24 bg-secondary border-y">
      <div className="max-w-7xl mx-auto reveal">
        <div className="max-w-[58ch]">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            What's next for GrovnX?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            WhatsApp Business API is where we're starting. We're building more tools to help
            businesses manage customers, automate workflows, and grow digitally.
          </p>
        </div>
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border rounded-2xl overflow-hidden">
          {upcoming.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group p-7 bg-background hover:bg-secondary transition-colors flex flex-col"
            >
              <p.icon
                className="size-5 text-muted-foreground group-hover:text-brand transition-colors"
                aria-hidden="true"
              />
              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-medium">{p.name}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Soon
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
