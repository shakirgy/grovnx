import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FinalCta } from "@/components/home/FinalCta";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug, name: product.name, tagline: product.tagline };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product unavailable — GrovnX" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.name} — Coming Soon | GrovnX`;
    const description = loaderData.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPlaceholderPage,
  errorComponent: ProductError,
  notFoundComponent: ProductNotFound,
});

function ProductPlaceholderPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug)!;
  const Icon = product.icon;
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="px-6 pt-24 pb-20 bg-secondary border-b">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border text-xs font-semibold uppercase tracking-widest text-brand">
            Coming Soon
          </span>
          <div
            className="mx-auto mt-8 size-14 rounded-2xl bg-background border grid place-items-center"
          >
            <Icon className="size-7 text-brand" />
          </div>
          <h1 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-balance">
            {product.name}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty max-w-[56ch] mx-auto">
            {product.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/products/whatsapp-business-api"
              className="px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all"
            >
              Explore WhatsApp API
            </Link>
            <Link
              to="/"
              className="px-6 py-3 rounded-full font-medium border hover:bg-background inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-3xl font-semibold tracking-tight max-w-[24ch]">
            What we&apos;re building
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty max-w-[56ch]">
            {product.description}
          </p>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {product.highlights.map((h: string) => (
              <li key={h} className="py-5 flex gap-4 items-start">
                <Check className="size-4 mt-0.5 text-brand shrink-0" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-pretty">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 bg-secondary border-y">
        <div className="max-w-7xl mx-auto reveal">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
            Other products
          </h2>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 group"
                >
                  <span className="flex items-center gap-3 sm:w-72 shrink-0">
                    <p.icon className="size-4 text-brand shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium group-hover:text-brand transition-colors">
                      {p.name}
                    </span>
                  </span>
                  <span className="text-sm text-muted-foreground text-pretty">{p.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />

      <SiteFooter />
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Product not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The product you are looking for is not part of our catalogue.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ProductError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </div>
  );
}
