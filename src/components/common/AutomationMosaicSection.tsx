import { useRef, useState, useEffect } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "@/utils/image";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/constants";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_MAP: Record<string, string> = {
  "Dimming & Tuning of Lights": "dimming_and _tunning_of_lights.mp4",
  "Electrical Automation": "electrical_automation.mp4",
  "Mesh Wi-Fi Network": "mesh_wifi_network_solutions.mp4",
  "RGB Lighting": "rgb_mood_lighting.mp4",
  "Scene-Based Lighting": "scene_based_lighting.mp4",
  "Sensor-Based": "sensor_board_protection.mp4",
  "Wired Network": "wired_network_planning_and_design.mp4",
  "Gate Automation": "gate_automation.mp4",
};

const REEL_MAP: Record<string, string> = {
  "Curtain Automation": "https://www.instagram.com/reel/DQ38odUkpZr/",
  "Electrical Automation": "https://www.instagram.com/reel/DKHEqiVSl4-/",
  "Smart Switches": "https://www.instagram.com/reel/DKHEqiVSl4-/",
  "Wired Network": "https://www.instagram.com/reel/DKeUhreyEct/",
  "Mesh Wi-Fi Network": "https://www.instagram.com/reel/DKeUhreyEct/",
  "Networking": "https://www.instagram.com/reel/DKeUhreyEct/",
  "Sensor-Based": "https://www.instagram.com/reel/DTJNMgzk284/",
  "CCTV & Video": "https://www.instagram.com/reel/DTJNMgzk284/",
  "Dimming & Tuning of Lights": "https://www.instagram.com/reel/DZICTA9KjuW/",
};

interface AutomationMosaicImage {
  src: string;
  alt?: string;
  title?: string;
}

// Keep the fallback reference stable. A new [] on every render makes the media
// effect below run again, which in turn updates state and can lock the route.
const EMPTY_IMAGES: AutomationMosaicImage[] = [];

interface AutomationMosaicSectionProps {
  title: string;
  description: string;
  types: string[];
  features?: string[];
  suitableText?: string;
  images?: AutomationMosaicImage[]; // Expecting exactly 3 images (optional when reels is provided)
  imagePosition?: "left" | "right";
  prefix: string;
  serviceName: string; // The service name to match in the getWebReel API
  reelUrl?: string; // Optional direct reel URL
  reels?: string[]; // Optional array of reel URLs to render side-by-side (replaces images)
  reelTitles?: string[]; // Optional titles for reel links (SEO/accessibility)
}

function InstagramLinkCard({ reelUrl, title, linkTitle }: { reelUrl: string; title: string; linkTitle?: string }) {
  return (
    <a
      href={reelUrl}
      title={linkTitle}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/90 via-pink-900/80 to-orange-900/70 relative overflow-hidden group cursor-pointer"
    >
      <div className="flex flex-col items-center gap-3 p-6 text-center z-10">
        <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <span className="text-white text-xs font-semibold tracking-wide">Watch on Instagram</span>
        <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white/90 transition-colors" />
      </div>
      <span className="absolute top-4 left-4 text-white/40 text-[10px] font-medium uppercase tracking-widest">{title}</span>
    </a>
  );
}

export default function AutomationMosaicSection({
  title,
  description,
  types,
  features = [],
  suitableText,
  images = EMPTY_IMAGES,
  imagePosition = "left",
  prefix,
  serviceName,
  reelUrl,
  reels,
  reelTitles,
}: AutomationMosaicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [mediaData, setMediaData] = useState<{
    type: "Reel" | "Instagram" | "Image";
    url: string;
    embedUrl?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;
    const setMediaIfActive = (
      media: {
        type: "Reel" | "Instagram" | "Image";
        url: string;
        embedUrl?: string;
      } | null,
    ) => {
      if (!cancelled) setMediaData(media);
    };

    // 1. Priority: reelUrl prop or REEL_MAP
    const targetReel = reelUrl || REEL_MAP[serviceName];
    if (targetReel) {
      if (targetReel.includes("instagram.com")) {
        const match = targetReel.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
        const reelCode = match ? match[1] : "";
        if (reelCode) {
          setMediaIfActive({
            type: "Instagram",
            url: targetReel,
            embedUrl: `https://www.instagram.com/reel/${reelCode}/embed/`,
          });
          if (!cancelled) setLoading(false);
          return;
        }
      } else if (targetReel.endsWith(".mp4")) {
        setMediaIfActive({
          type: "Reel",
          url: targetReel.startsWith("http") ? targetReel : `${IMAGE_BASE_URL}/reels/${targetReel}`,
        });
        if (!cancelled) setLoading(false);
        return;
      }
    }

    // 2. Fallback: VIDEO_MAP
    if (VIDEO_MAP[serviceName]) {
      setMediaIfActive({
        type: "Reel",
        url: `${IMAGE_BASE_URL}/reels/${VIDEO_MAP[serviceName]}`,
      });
      if (!cancelled) setLoading(false);
      return;
    }

    // 3. Fallback: getWebReel API
    const fetchMedia = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/getWebReel`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("API error");
        const json = await res.json();
        
        const serviceData = json.data?.find(
          (item: any) => item.services === serviceName
        );
        
        if (serviceData) {
          const reelsBase = json.image_url?.find(
            (img: any) => img.image_for === "Reels"
          )?.image_url || `${IMAGE_BASE_URL}/reels/`;
          
          const isFullUrl = serviceData.services_url_image.startsWith("http");
          const finalUrl = isFullUrl 
            ? serviceData.services_url_image 
            : `${reelsBase}${serviceData.services_url_image}`;

          if (finalUrl.includes("instagram.com")) {
            const match = finalUrl.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
            const reelCode = match ? match[1] : "";
            if (reelCode) {
              setMediaIfActive({
                type: "Instagram",
                url: finalUrl,
                embedUrl: `https://www.instagram.com/reel/${reelCode}/embed/`,
              });
              return;
            }
          }

          const isDirectVideo = finalUrl.toLowerCase().endsWith(".mp4") || 
            (serviceData.services_type === "Reel" && 
             !finalUrl.includes("instagram.com") && 
             !finalUrl.includes("youtube.com") && 
             !finalUrl.includes("youtu.be"));

          if (isDirectVideo) {
            setMediaIfActive({
              type: "Reel",
              url: finalUrl,
            });
          } else {
            setMediaIfActive({
              type: "Image",
              url: getImageUrl(images[0]?.src || ""),
            });
          }
        } else {
          setMediaIfActive({
            type: "Image",
            url: getImageUrl(images[0]?.src || ""),
          });
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error(`Failed to load media for ${serviceName}:`, err);
        }
        setMediaIfActive({
          type: "Image",
          url: getImageUrl(images[0]?.src || ""),
        });
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchMedia();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [serviceName, images, reelUrl]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the image mosaic
      tl.from(`.${prefix}-img`, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Stagger the text content blocks
      tl.from(
        `.${prefix}-content > *`,
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.6",
      );
    },
    { scope: sectionRef },
  );

  const renderContent = () => (
    <div className={`${prefix}-content flex flex-col gap-7 ${imagePosition === "right" ? "lg:order-first" : "lg:order-last"}`}>
      {/* Heading block */}
      <div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main leading-[1.1] tracking-tight mb-3"
          style={{ textWrap: "balance" } as CSSProperties}
        >
          {title}
        </h2>
        <p className="text-text-muted text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Types checklist */}
      {types.length > 0 && (
        <ul className="space-y-3">
          {types.map((type) => (
            <li key={type} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white! shrink-0 shadow-md">
                <svg
                  className="w-3.5 h-3.5 stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-text-main">
                {type}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Features panel */}
      {(features.length > 0 || suitableText) && (
        <div className="bg-bg-surface border border-border-main/30 rounded-xl p-6">
          {features.length > 0 && (
            <ul className="space-y-2.5 mb-5">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                  <span className="text-sm text-text-muted">{feat}</span>
                </li>
              ))}
            </ul>
          )}
          {suitableText && (
            <p className={`text-sm font-semibold text-text-main leading-relaxed ${features.length > 0 ? "border-t border-border-main/30 pt-4" : ""}`}>
              {suitableText}
            </p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section ref={sectionRef} className="mb-28 no-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left/Right Column: Reels or Image Mosaic */}
        <div className={`${reels && reels.length > 0 ? "grid grid-cols-2 gap-3" : "grid grid-cols-2 gap-3"} ${imagePosition === "right" ? "lg:order-last" : "lg:order-first"}`}>

          {reels && reels.length > 0 ? (
            /* ── Double-Reel Layout ── */
            <>
              {reels.map((reel, idx) => (
                  <div
                    key={idx}
                    className={`${prefix}-img relative rounded-2xl overflow-hidden bg-bg-surface border border-border-main/30 shadow-inner`}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <InstagramLinkCard reelUrl={reel} title={`${title} Reel ${idx + 1}`} linkTitle={reelTitles?.[idx]} />
                    </div>
                    <div className="aspect-[9/16]" />
                  </div>
                ))}
            </>
          ) : (
            /* ── Original 3-Image Mosaic Layout ── */
            <>
              {/* 1st Card: Tall left image (Dynamic content, Reel or Image from the API) */}
              <div className={`${prefix}-img row-span-2 relative rounded-2xl overflow-hidden bg-bg-surface border border-border-main/30 shadow-inner`}>
                <div className="absolute inset-0 overflow-hidden">
                  {loading ? (
                    <div className="w-full h-full flex items-center justify-center bg-bg-surface">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue" />
                    </div>
                  ) : mediaData?.type === "Instagram" && mediaData.embedUrl ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-black/95 relative overflow-hidden">
                      <InstagramLinkCard reelUrl={mediaData.url} title={title} linkTitle={reelTitles?.[0]} />
                    </div>
                  ) : mediaData?.type === "Reel" ? (
                    <video
                      src={mediaData.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={mediaData?.url || getImageUrl(images[0]?.src || "")}
                      alt={images[0]?.alt || `${title} demonstration`}
                      title={images[0]?.title || images[0]?.alt || `${title} demonstration`}
                      className="w-full h-full object-cover transition-transform duration-750 hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="aspect-[9/16] lg:aspect-[3/4]" />
              </div>

              {/* 2nd Card: Top-right wider image */}
              <div className={`${prefix}-img relative rounded-2xl overflow-hidden aspect-square group border border-border-main/20 shadow-md`}>
                <img
                  src={getImageUrl(images[1]?.src || "")}
                  alt={images[1]?.alt || `${title} secondary view`}
                  title={images[1]?.title || images[1]?.alt || `${title} secondary view`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              {/* 3rd Card: Bottom-right wider image */}
              <div className={`${prefix}-img relative rounded-2xl overflow-hidden aspect-square group border border-border-main/20 shadow-md`}>
                <img
                  src={getImageUrl(images[2]?.src || "")}
                  alt={images[2]?.alt || `${title} tertiary view`}
                  title={images[2]?.title || images[2]?.alt || `${title} tertiary view`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </>
          )}

        </div>

        {/* Content Column */}
        {renderContent()}

      </div>
    </section>
  );
}
