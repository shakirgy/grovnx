import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products } from "@/lib/products";
import { BookDemoButton } from "@/components/demo/DemoBookingModal";
import grovnx from "../assets/black.png";

const linkBase =
  "px-3 py-2 text-sm font-medium rounded-full transition-colors bg-transparent text-foreground hover:bg-muted";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/why-grovnx", label: "Why GrovnX" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

function SolutionsMenu({ align = "start" }: { align?: "start" | "end" }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${linkBase} inline-flex items-center gap-1 outline-none`}
        aria-label="Solutions menu"
      >
        Solutions
        <ChevronDown className="size-4" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-72">
        {products.map((p) => (
          <DropdownMenuItem key={p.slug} asChild>
            <Link
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="flex items-center gap-3 py-2"
            >
              <span
                className={`grid place-items-center size-8 rounded-lg ${
                  p.status === "live" ? p.accent : "bg-muted"
                }`}
              >
                <p.icon
                  className={`size-4 ${p.status === "live" ? "text-brand" : "text-muted-foreground"}`}
                  aria-hidden="true"
                />
              </span>
              <span className="flex flex-col">
                <span className={p.status === "live" ? "font-medium" : ""}>
                  {p.name}
                </span>
                <span
                  className={`text-[11px] tracking-wide ${
                    p.status === "live" ? "text-brand" : "text-muted-foreground"
                  }`}
                >
                  {p.status === "live" ? "Available now" : "Coming soon"}
                </span>
              </span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={grovnx}
            alt="GrovnX"
            className="h-8 w-auto"
          />
          </Link>
          {/* <div className="size-8 bg-brand rounded-lg grid place-items-center">
            <div className="size-3 bg-primary-foreground rounded-full" />
          </div> 
          <span className="font-semibold tracking-tight text-xl">GrovnX</span>
          */}
        

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          <Link
            to="/"
            className={linkBase}
            activeProps={{ className: `${linkBase} bg-muted` }}
          >
            Home
          </Link>
          <SolutionsMenu />
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={linkBase}
              activeProps={{ className: `${linkBase} bg-muted` }}
            >
              {l.label}
            </Link>
          ))}
          <BookDemoButton className="ml-2 px-4 py-2 text-sm font-medium rounded-full bg-brand text-primary-foreground ring-1 ring-brand hover:bg-brand-hover transition-all" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav
            className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1"
            aria-label="Mobile"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <span className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Solutions
            </span>
            {products.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-muted transition-colors"
              >
                <p.icon
                  className={`size-4 ${p.status === "live" ? "text-brand" : "text-muted-foreground"}`}
                  aria-hidden="true"
                />
                {p.name}
                {p.status === "soon" && (
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">
                    Soon
                  </span>
                )}
              </Link>
            ))}
            <BookDemoButton
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 text-sm font-medium rounded-full bg-brand text-primary-foreground text-center"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
