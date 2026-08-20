import ComingSoon from "@/components/common/ComingSoon";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";

export default function ServicePage() {
  useSEO(SEO_ROUTES["/service"]);
  return <ComingSoon pageTitle="Our Services" />;
}
