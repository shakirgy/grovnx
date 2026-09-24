import { useEffect, useState } from "react";

import { BookDemoButton } from "@/components/demo/DemoBookingModal";

export function BookDemoCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 bottom-6 right-6 max-sm:left-6 max-sm:right-6 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <BookDemoButton className="w-full sm:w-auto rounded-full bg-brand text-primary-foreground shadow-lg hover:bg-brand-hover px-7 h-11 text-sm font-medium">
        Book a demo
      </BookDemoButton>
    </div>
  );
}
