import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  X,
  ChevronDown,
  Phone,
  ToggleLeft,
  Blinds,
  Lock,
  DoorOpen,
  Zap,
  Sparkles,
  Sliders,
  Palette,
  Wifi,
  Network,
  Camera,
  Radar,
  AudioLines,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, type Variants } from "framer-motion";
import BrandLogo from "@/components/common/BrandLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeHref: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const navLinks = [
  { label: "Home", path: "/", title: "MAKc Automations Home" },
  { label: "Contact Us", path: "/contact", title: "Contact MAKc Automations" },
];

const services = [
  {
    category: "Automation",
    href: "/automation",
    items: [
      { title: "Smart Switches", href: "/automation", icon: ToggleLeft },
      { title: "Curtain Automation", href: "/automation", icon: Blinds },
      { title: "Gate Automation", href: "/automation", icon: Lock },
      { title: "Door Automation", href: "/automation", icon: DoorOpen },
      { title: "Electrical Automation", href: "/automation", icon: Zap },
    ],
  },
  {
    category: "Lighting",
    href: "/lighting",
    items: [
      { title: "Scene-Based Lighting", href: "/lighting", icon: Sparkles },
      { title: "Dimming & Tuning", href: "/lighting", icon: Sliders },
      { title: "RGB Mood Lighting", href: "/lighting", icon: Palette },
    ],
  },
  {
    category: "Networking",
    href: "/networking",
    items: [
      { title: "Mesh Wi-Fi Solutions", href: "/networking", icon: Wifi },
      { title: "Wired Network Planning", href: "/networking", icon: Network },
    ],
  },
  {
    category: "Security",
    href: "/security",
    items: [
      { title: "CCTV Monitoring", href: "/security", icon: Camera },
      { title: "Sensor-Based Protection", href: "/security", icon: Radar },
    ],
  },
  {
    category: "Audio",
    href: "/audio",
    items: [{ title: "Multi-room Audio", href: "/audio", icon: AudioLines }],
  },
];

import { COMPANY_INFO } from "@/config/constants";

const company = {
  street: COMPANY_INFO.address.street,
  cityState: COMPANY_INFO.address.cityState,
  pincode: COMPANY_INFO.address.pincode,
  phone: COMPANY_INFO.phones.primary.number,
  email: COMPANY_INFO.email,
};

function MobileServiceAccordion({
  activeHref,
  onSelect,
}: {
  activeHref: string;
  onSelect?: () => void;
}) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="space-y-1" role="region" aria-label="Services">
      {services.map((category) => {
        const isOpen = openCategory === category.category;
        return (
          <div key={category.category}>
            <button
              type="button"
              onClick={() => toggleCategory(category.category)}
              className={cn(
                "flex items-center justify-between w-full py-2 text-xl font-black uppercase tracking-wider transition-colors active:opacity-80 touch-manipulation",
                isOpen || activeHref === category.href
                  ? "text-accent-blue"
                  : "text-text-main hover:text-accent-blue",
              )}
              aria-expanded={isOpen}
              aria-controls={`mobile-services-${category.category}`}
            >
              <span>{category.category}</span>
              <ChevronDown
                className={cn(
                  "size-5 flex-shrink-0 transition-transform duration-300 ease-out",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out transform-gpu"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              id={`mobile-services-${category.category}`}
              role="region"
              aria-label={`${category.category} services`}
            >
              <div
                className="overflow-hidden pl-4 space-y-1 min-h-0"
                inert={!isOpen}
                aria-hidden={!isOpen}
              >
                {category.items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    title={`MAKc ${item.title} in Bangalore`}
                    onClick={() => {
                      setOpenCategory(null);
                      if (onSelect) onSelect();
                    }}
                    className="flex items-center gap-3 py-1.5 text-sm font-bold uppercase tracking-wide text-text-muted hover:text-text-main transition-colors active:opacity-80 touch-manipulation"
                  >
                    <item.icon
                      className="size-4 text-accent-blue"
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const MobileMenu = memo(function MobileMenu({
  isOpen,
  onClose,
  activeHref,
}: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="left"
        className="w-[85%] max-w-xs sm:max-w-sm bg-bg-surface text-text-main border-r border-border-main p-6 flex flex-col justify-between overflow-y-auto overscroll-contain touch-pan-y [&>button]:hidden transform-gpu will-change-transform z-[300]"
      >
        <div className="flex flex-col min-h-full">
          {/* Header with Logo and Circular Close Button */}
          <SheetHeader className="p-0 text-left">
            <div className="flex items-center justify-between pb-6">
              <Link
                to="/#home-top"
                title="MAKc Automations Home"
                onClick={onClose}
                className="flex items-center shrink-0"
              >
                <BrandLogo className="h-7 w-auto" />
              </Link>
              <SheetClose className="flex items-center justify-center size-10 rounded-full border-2 border-text-main/30 text-text-main hover:border-accent-blue hover:text-accent-blue hover:bg-accent-blue/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue active:scale-95 touch-manipulation cursor-pointer">
                <X className="size-5 stroke-[2.5]" />
                <span className="sr-only">Close menu</span>
              </SheetClose>
            </div>
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu with links and company contact details
            </SheetDescription>
          </SheetHeader>

          {/* Navigation Links with Non-Overlapping Stagger Animation */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            className="flex-1 py-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => {
                const isActive = item.path === activeHref;

                return (
                  <motion.li key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      title={item.title}
                      aria-current={isActive ? "page" : undefined}
                      onClick={onClose}
                      className={cn(
                        "block text-2xl font-black uppercase tracking-wider transition-colors active:opacity-80 touch-manipulation",
                        isActive
                          ? "text-accent-blue font-black"
                          : "text-text-main hover:text-accent-blue",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li variants={itemVariants}>
                <p className="text-2xl font-black uppercase tracking-wider text-text-main">
                  Services
                </p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <MobileServiceAccordion
                  activeHref={activeHref}
                  onSelect={onClose}
                />
              </motion.li>
            </ul>

            {/* CTA Button in Drawer */}
            <motion.div variants={itemVariants} className="pt-4 pb-2">
              <a
                href={`tel:${company.phone.replace(/-/g, "")}`}
                title={`Call MAKc Automations at ${company.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-accent-blue text-white text-sm font-bold uppercase tracking-wide hover:bg-accent-blue/90 transition-all duration-200 active:scale-[0.98] touch-manipulation"
              >
                <Phone className="size-4 stroke-[2]" aria-hidden="true" />
                Call Now
              </a>
            </motion.div>
            <p className="text-center text-xs text-text-muted tracking-wide">
              +91-8197783287
            </p>
          </motion.nav>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = "MobileMenu";
