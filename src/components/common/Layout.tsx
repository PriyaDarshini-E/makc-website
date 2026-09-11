import { lazy, useEffect, Suspense, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../layouts/navbar/Header";
import RouteErrorBoundary from "./RouteErrorBoundary";

const Footer = lazy(() => import("../layouts/footer/Footer"));
const FloatingActionGroup = lazy(() => import("./FloatingActionGroup"));

import { Toaster } from "react-hot-toast";

function FooterWhenVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Armed only after first paint settles: transient hydration layout can
  // report wrong rects (~100ms) and trip the observer instantly, dragging
  // Footer + form libs into the critical path. Below-fold footer is never
  // needed that early.
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    let timer: number | undefined;
    // Footer is 3000px+ below the fold: never needed before first paint
    // settles. requestIdleCallback alone fires in the first idle gap
    // (~150ms, still inside hydration layout chaos), so enforce a 2s floor.
    const arm = () => {
      const elapsed =
        typeof performance !== "undefined" ? performance.now() : 2000;
      if (elapsed >= 2000) {
        setArmed(true);
      } else {
        timer = window.setTimeout(arm, 2000 - elapsed);
      }
    };
    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(arm, { timeout: 3000 });
    } else {
      timer = window.setTimeout(arm, 2000);
    }
    return () => {
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible || !armed) return;

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
  }, [visible, armed]);

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
    const timer = window.setTimeout(() => setVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  return visible ? (
    <Suspense fallback={null}>
      <FloatingActionGroup />
    </Suspense>
  ) : null;
}

export default function Layout() {
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
            <RouteErrorBoundary>
              <Outlet />
            </RouteErrorBoundary>
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
  );
}
