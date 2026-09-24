import { Link } from "@tanstack/react-router";
import { BookDemoButton } from "@/components/demo/DemoBookingModal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-6 py-28 bg-brand-dark">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute -top-16 left-[12%] size-56 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-[-3rem] right-[10%] size-48 rounded-[3rem] rotate-12 bg-brand/10" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center reveal">
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance text-background">
          Have a business problem to solve?
        </h2>
        <p className="mt-5 leading-relaxed text-pretty text-background/70">
          Tell us what you're trying to build. We'll help you figure out the technology behind it.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <BookDemoButton className="px-6 py-3 rounded-full bg-brand text-primary-foreground font-medium hover:bg-brand-hover transition-all" />
          <Link
            to="/contact"
            hash="lead-form"
            className="px-6 py-3 rounded-full font-medium text-background ring-1 ring-background/25 hover:bg-background/10 transition-colors"
          >
            Talk to Us
          </Link>
        </div>
        <p className="mt-10 text-sm font-medium tracking-wide text-background/60">
          We Plan. We Build. You Grow.
        </p>
      </div>
    </section>
  );
}
