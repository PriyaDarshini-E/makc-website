import { lazy, useEffect, Suspense, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../layouts/navbar/Header";

const Footer = lazy(() => import("../layouts/footer/Footer"));
const FloatingActionGroup = lazy(() => import("./FloatingActionGroup"));

import { Toaster } from "react-hot-toast";

function FooterWhenVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className={visible ? undefined : "min-h-[360px]"}>
      {visible ? (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      ) : null}
    </div>
  );
}

function FloatingActionsWhenIdle() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const timer = window.setTimeout(show, 10000);
    window.addEventListener("pointerdown", show, { once: true, passive: true });
    window.addEventListener("keydown", show, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("keydown", show);
    };
  }, []);

  return visible ? (
    <Suspense fallback={null}>
      <FloatingActionGroup />
    </Suspense>
  ) : null;
}

export default function Layout() {
  const [queryClient] = useState(() => new QueryClient());
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
        {/* Skip to Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-surface focus:text-accent-blue focus:px-4 focus:py-2 focus:border focus:border-border-main focus:rounded-md focus:shadow-lg"
          title="Skip to Main Content"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center bg-bg-main">
                <div className="w-8 h-8 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <FooterWhenVisible />
        <FloatingActionsWhenIdle />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--bg-surface)",
              color: "var(--text-main)",
              border: "1px solid var(--border-main)",
              borderRadius: "12px",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
            },
          }}
        />
      </div>
    </QueryClientProvider>
  );
}
