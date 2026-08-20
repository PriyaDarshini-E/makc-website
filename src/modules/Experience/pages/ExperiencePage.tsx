import ComingSoon from "@/components/common/ComingSoon";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";

export default function ExperiencePage() {
  useSEO(SEO_ROUTES["/experience"]);
  return <ComingSoon pageTitle="Experience Center" />;
}
