import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import HomeV2Page from "./modules/Home/pages/HomePage";

// Lazy load secondary pages to shrink the initial JS bundle
const HomePage = lazy(() => import("./modules/Home/pages/HomePage"));
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
const ExperiencePage = lazy(
  () => import("./modules/Experience/pages/ExperiencePage"),
);
const WhyUsPage = lazy(() => import("./modules/WhyUs/pages/WhyUsPage"));
const OldPage = lazy(() => import("./modules/old/pages/OldPage"));
const AudioPage = lazy(() => import("./modules/Audio/pages/AudioPage"));
const NotFound = lazy(() => import("./components/common/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeV2Page />} />
        <Route path="/v1" element={<HomePage />} />
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
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
