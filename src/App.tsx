import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomeV2Page from "./modules/Home/pages/HomePage";

// Lazy load secondary pages to shrink the initial JS bundle
const AutomationPage = lazy(
  () => import("./modules/Automation/pages/AutomationPage"),
);
const SecurityPage = lazy(
  () => import("./modules/Security/pages/SecurityPage"),
);
const LightingPage = lazy(
  () => import("./modules/Lighting/pages/LightingPage"),
);
const NetworkingPage = lazy(
  () => import("./modules/Networking/pages/NetworkingPage"),
);
const ContactPage = lazy(
  () => import("./modules/Contact/pages/ContactPageRoute"),
);
const AboutPage = lazy(() => import("./modules/About/pages/AboutPage"));
const ServicePage = lazy(() => import("./modules/Service/pages/ServicePage"));
const BlogPage = lazy(() => import("./modules/Blogs/pages/BlogPage"));
const BlogPostPage = lazy(
  () => import("./modules/Blogs/pages/BlogPostPage"),
);
const ExperiencePage = lazy(
  () => import("./modules/Experience/pages/ExperiencePage"),
);
const WhyUsPage = lazy(() => import("./modules/WhyUs/pages/WhyUsPage"));
const OldPage = lazy(() => import("./modules/old/pages/OldPage"));
const AudioPage = lazy(() => import("./modules/Audio/pages/AudioPage"));
const NotFound = lazy(() => import("./components/common/NotFound"));
// Test page pulls gsap/ScrollTrigger — keep it out of the critical path
const AutomationPageV2 = lazy(
  () => import("@/modules/test-pages/AutomationPageV2"),
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeV2Page />} />
        <Route path="/v1" element={<HomeV2Page />} />
        <Route path="/old" element={<OldPage />} />

        {/* Solutions routes */}
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/lighting" element={<LightingPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/audio" element={<AudioPage />} />

        {/* Additional links routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/automation-v2" element={<AutomationPageV2 />} />

        {/* Redirect aliases to canonical URLs */}
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/contact-us/" element={<Navigate to="/contact" replace />} />
        <Route path="/experience-center" element={<Navigate to="/experience" replace />} />
        <Route path="/experience-center/" element={<Navigate to="/experience" replace />} />
        <Route path="/services" element={<Navigate to="/service" replace />} />
        <Route path="/services/" element={<Navigate to="/service" replace />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
