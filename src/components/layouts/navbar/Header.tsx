import { useEffect, useState, type MouseEvent, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import BrandLogo from "@/components/common/BrandLogo";
import { COMPANY_INFO } from "@/config/constants";

// Deferred: drawer-only (Radix Sheet + motion). Renders nothing visible until
// first opened, so gating on first-open is visually identical and keeps
// motion/Radix-dialog out of the critical path.
const MobileMenu = lazy(() =>
  import("./MobileMenu").then((m) => ({ default: m.MobileMenu })),
);

interface NavLink {
  label: string;
  path: string;
  title: string;
  external?: boolean;
}

const allLinks: NavLink[] = [
  { label: "Home", path: "/", title: `${COMPANY_INFO.name} Home` },
  // { label: "About", path: "/about", title: `About ${COMPANY_INFO.name}` },
  {
    label: "Automation",
    path: "/automation",
    title: "Smart Home Automation Services",
  },
  { label: "Lighting", path: "/lighting", title: "Smart Lighting Solutions" },
  {
    label: "Networking",
    path: "/networking",
    title: "Home Networking Solutions",
  },
  {
    label: "Security",
    path: "/security",
    title: "Smart Home Security Systems",
  },
  { label: "Audio", path: "/audio", title: "Home Audio Solutions" },
  { label: "Contact Us", path: "/contact", title: `Contact ${COMPANY_INFO.name}` },
];

export default function Header() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 20,
  );
  const [drawerOpen, setDrawer] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages that have a full-bleed dark hero image — white nav text is safe on these
  const darkHeroRoutes = [
    "/",
    "/automation",
    "/lighting",
    "/networking",
    "/security",
    "/audio",
    "/about",
    "/why-us",
  ];
  const hasDarkHero = darkHeroRoutes.includes(location.pathname);

  const close = () => {
    setDrawer(false);
    document.body.style.overflow = "";
  };

  const handleHomeLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggle = () => {
    setMenuMounted(true);
    setDrawer((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Each route starts with a transparent header; scrolling or hash navigation can activate it again.
    setScrolled(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-[background,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "bg-bg-surface/90 backdrop-blur-xl border-b border-border-main/40 shadow-[0_1px_30px_rgba(0,0,0,0.16)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-8xl h-16 sm:h-20 lg:h-24 items-center justify-between gap-4 px-4 sm:px-6 lg:px-16">
          <Link
            to="/#home-top"
            title="MAKc Automations Home"
            className="flex items-center shrink-0 group"
            onClick={handleHomeLogoClick}
          >
            <BrandLogo className="h-8 sm:h-9 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Primary navigation"
          >
            {allLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const className = `group relative overflow-hidden px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                isActive
                  ? "text-accent-blue font-semibold"
                  : isScrolled
                    ? "text-text-main hover:text-accent-blue"
                    : mounted && theme === "light"
                      ? "text-slate-900 font-semibold hover:text-accent-blue"
                      : hasDarkHero
                        ? "!text-white/90 hover:!text-white"
                        : "text-text-main hover:text-accent-blue"
              }`;

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    title={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    <span className="relative block h-[1.2em] leading-[1.2em] whitespace-nowrap overflow-hidden">
                      <span className="relative block transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                        {link.label}
                      </span>
                      <span className="absolute inset-x-0 top-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
                        {link.label}
                      </span>
                    </span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  title={link.title}
                  className={className}
                >
                  <span className="relative block h-[1.2em] leading-[1.2em] whitespace-nowrap overflow-hidden">
                    <span className="relative block transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute inset-x-0 top-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
            {/* Call Button (Desktop) */}
            <a
              href={`tel:${COMPANY_INFO.phones.primary.digits}`}
              title={`Call ${COMPANY_INFO.name} at ${COMPANY_INFO.phones.primary.display}`}
              className="hidden sm:flex items-center gap-2 h-9 px-4 rounded-full bg-accent-blue text-[#ffffff] text-xs font-semibold tracking-wide hover:bg-accent-blue/90 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-[0_4px_18px_rgba(10,132,255,0.35)] cursor-pointer"
              aria-label={`Call ${COMPANY_INFO.name}`}
            >
              <Phone className="h-3.5 w-3.5 stroke-[2]" aria-hidden="true" />
              <span>Call Now</span>
            </a>

            {/* Call Button (Mobile) */}
            <a
              href={`tel:${COMPANY_INFO.phones.primary.digits}`}
              title={`Call ${COMPANY_INFO.name} at ${COMPANY_INFO.phones.primary.display}`}
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-full bg-accent-blue text-[#ffffff] hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_15px_rgba(10,132,255,0.35)] cursor-pointer"
              aria-label={`Call ${COMPANY_INFO.name}`}
            >
              <Phone className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
            </a>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer shrink-0 ml-0.5 ${
                isScrolled
                  ? "border-border-main/80 bg-bg-surface/90 text-text-main hover:bg-bg-surface hover:text-accent-blue hover:border-accent-blue/50 shadow-sm"
                  : mounted && theme === "light"
                    ? "border-slate-300/90 bg-white/95 text-slate-900 hover:bg-white hover:text-accent-blue shadow-md backdrop-blur-md"
                    : "border-white/40 bg-black/50 text-white hover:bg-black/70 hover:border-white/80 shadow-md backdrop-blur-md"
              }`}
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 stroke-[2.2]" />
              ) : (
                <Moon className="h-4.5 w-4.5 stroke-[2.2]" />
              )}
            </button>

            {/* Hamburger Toggle Button (Mobile / Small Screen Only) */}
            <button
              type="button"
              onClick={toggle}
              className={`flex lg:hidden h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 cursor-pointer shrink-0 ml-0.5 ${
                isScrolled
                  ? "border-border-main/80 bg-bg-surface/90 text-text-main hover:bg-bg-surface hover:text-accent-blue hover:border-accent-blue/50 shadow-sm"
                  : mounted && theme === "light"
                    ? "border-slate-300/90 bg-white/95 text-slate-900 hover:bg-white hover:text-accent-blue shadow-md backdrop-blur-md"
                    : "border-white/40 bg-black/50 text-white hover:bg-black/70 hover:border-white/80 shadow-md backdrop-blur-md"
              }`}
              title={drawerOpen ? "Close Menu" : "Open Menu"}
              aria-label={drawerOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={drawerOpen}
            >
              <Menu className="h-4.5 w-4.5 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </header>

      {menuMounted ? (
        <Suspense fallback={null}>
          <MobileMenu
            isOpen={drawerOpen}
            onClose={close}
            activeHref={location.pathname}
          />
        </Suspense>
      ) : null}
    </>
  );
}
