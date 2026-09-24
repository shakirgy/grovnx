import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import grovnx from "../assets/white.png";

export function SiteFooter() {
  return (
    <footer className="py-20 bg-brand-dark text-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-zinc-800 pb-14">
          <div className="max-w-[38ch]">
            <div className="flex items-center gap-2 mb-5">
              <img src={grovnx} alt="GrovnX" className="h-8 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-pretty">
              We Plan. We Build. You Grow.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-mute5d-foreground">
              Business technology solutions built around the way you work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Solutions
              </span>
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-sm hover:text-brand transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Company
              </span>
              <Link
                to="/about"
                className="text-sm hover:text-brand transition-colors"
              >
                About
              </Link>
              <Link
                to="/why-grovnx"
                className="text-sm hover:text-brand transition-colors"
              >
                Why GrovnX
              </Link>
              <Link
                to="/pricing"
                className="text-sm hover:text-brand transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-brand transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Legal
              </span>
              <Link
                to="/privacy"
                className="text-sm hover:text-brand transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm hover:text-brand transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 text-xs text-muted-foreground">
          <p>© 2026 Grovsys Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
