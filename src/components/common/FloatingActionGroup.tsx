import { useState, useEffect } from "react";
import FloatingBot from "./FloatingBot";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function FloatingActionGroup() {
  const [isVisible, setIsVisible] = useState(false);

  // Fade in the floating action group after a tiny delay for a premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3.5 transition-all duration-700 ease-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      } @media (prefers-reduced-motion: reduce) { transition: none; transform: none; opacity: 1; }`}
    >
      <FloatingWhatsApp />
      <FloatingBot />
    </div>
  );
}
