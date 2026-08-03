import { useState, useEffect } from "react";
import FloatingBot from "./FloatingBot";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function FloatingActionGroup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = window.innerHeight * 0.8;

    const onScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3.5 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <FloatingWhatsApp />
      <FloatingBot />
    </div>
  );
}
