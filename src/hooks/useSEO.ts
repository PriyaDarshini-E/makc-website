import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, MASTER_META_KEYWORDS, SITE_URL } from "@/config/seoData";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  publisher?: string;
  ogType?: string;
  ogImage?: string;
  schemaGraph?: any[];
}

export default function useSEO({
  title,
  description,
  keywords = MASTER_META_KEYWORDS,
  canonicalUrl = `${SITE_URL}/`,
  robots = "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  author = "MAKc Automations",
  publisher = "MAKc Automations",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schemaGraph,
}: SEOProps) {
  // Crawlers need absolute image URLs — absolutize "/"-rooted paths.
  const absoluteOgImage = ogImage.startsWith("/")
    ? `${SITE_URL}${ogImage}`
    : ogImage;

  useEffect(() => {
    // 1. Set Title
    document.title = title;

    // Helper for <meta name="...">
    const setMetaName = (name: string, content?: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (content) {
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("name", name);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      } else if (tag) {
        tag.remove();
      }
    };

    // Helper for <meta property="...">
    const setMetaProperty = (property: string, content?: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (content) {
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute("property", property);
          document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
      } else if (tag) {
        tag.remove();
      }
    };

    // 2. Standard Meta Tags
    setMetaName("description", description);
    setMetaName("keywords", keywords);
    setMetaName("robots", robots);
    setMetaName("author", author);
    setMetaName("publisher", publisher);

    // 3. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonicalUrl);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }

    // 4. OpenGraph Tags
    setMetaProperty("og:type", ogType);
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", canonicalUrl);
    setMetaProperty("og:image", absoluteOgImage);

    // 5. Twitter Card Tags
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", absoluteOgImage);

    // 6. JSON-LD Schema Tag
    if (schemaGraph && schemaGraph.length > 0) {
      let scriptTag = document.querySelector('script#route-jsonld') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "route-jsonld";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemaGraph,
      });
    }
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    robots,
    author,
    publisher,
    ogType,
    ogImage,
    absoluteOgImage,
    schemaGraph,
  ]);
}
