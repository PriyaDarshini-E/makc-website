import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";
import type { ReactNode } from "react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
// import HeroSectionV2 from "../sections/HeroSectionV2";

const HeroSectionV2 = lazy(() => import("../sections/HeroSectionV2"));

// Lazy load below-the-fold sections to shrink the initial page load JS payload
const ServicesSection = lazy(() => import("../sections/ServicesSection"));
const PartnerLogosSection = lazy(
  () => import("../sections/PartnerLogosSection"),
);
const SolutionsGallery = lazy(
  () => import("@/components/common/SolutionsGallery"),
);
const GoogleReviews = lazy(() => import("@/components/common/GoogleReviews"));



function LazyOnView({
  children,
  minHeight = 520,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

export default function HomeV2Page() {
  useSEO(SEO_ROUTES["/"]);

  return (
    <div
      id="home-top"
      className="relative bg-bg-main min-h-screen text-text-main"
    >
      {/* V3 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      {/* <StatsSectionV2 /> */}

      <LazyOnView minHeight={720}>
        <ServicesSection />
      </LazyOnView>

      <LazyOnView minHeight={520}>
        <SolutionsGallery />
      </LazyOnView>

     

      <LazyOnView minHeight={520}>
        <GoogleReviews />
      </LazyOnView>

      <LazyOnView minHeight={260}>
        <PartnerLogosSection />
      </LazyOnView>
    </div>
  );
}
