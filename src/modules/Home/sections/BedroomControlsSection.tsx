import { useState, useRef, useEffect } from "react";

const SLIDES = [
  {
    id: 0,
    title: "Lights Control",
    description: "Lights on—because bumping into furniture isn't a personality trait.",
    video: "https://whitelion-assets.blr1.cdn.digitaloceanspaces.com/website/home/bedroom_animation.mp4",
  },
  {
    id: 1,
    title: "Fan Control",
    description: "Fan on—keeping you cool and comfortable, effortlessly.",
    video: "https://whitelion-assets.blr1.cdn.digitaloceanspaces.com/website/home/bedroom_animation.mp4",
  },
  {
    id: 2,
    title: "Curtain Control",
    description: "Curtains open—let the sunshine (or your main character moment) in.",
    video: "https://whitelion-assets.blr1.cdn.digitaloceanspaces.com/website/home/bedroom_animation.mp4",
  },
  {
    id: 3,
    title: "Weather Control",
    description: "Temperature set—because guessing the weather is so last season.",
    video: "https://whitelion-assets.blr1.cdn.digitaloceanspaces.com/website/home/bedroom_animation.mp4",
  },
];

export default function BedroomControlsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sync active video playback and handle auto-advance on ended
  useEffect(() => {
    // Pause all other videos
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== activeIndex) {
        video.pause();
      }
    });

    const activeVideo = videoRefs.current[activeIndex];
    if (!activeVideo) return;

    // Listener to advance slide on video end
    const handleVideoEnded = () => {
      if (activeIndex < SLIDES.length - 1) {
        setActiveIndex((prev) => prev + 1);
        setIsPlaying(true);
      } else {
        // Pauses at the end of the last slide
        setIsPlaying(false);
      }
    };

    activeVideo.addEventListener("ended", handleVideoEnded);

    if (isPlaying) {
      const playPromise = activeVideo.play();
      if (playPromise) {
        playPromise.catch((err) => {
          console.warn("Video playback was interrupted or prevented:", err);
        });
      }
    } else {
      activeVideo.pause();
    }

    return () => {
      activeVideo.removeEventListener("ended", handleVideoEnded);
    };
  }, [activeIndex, isPlaying]);

  const handleButtonClick = () => {
    if (activeIndex === SLIDES.length - 1 && !isPlaying) {
      // Reset slide to 0 and play
      setActiveIndex(0);
      setIsPlaying(true);
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        firstVideo.currentTime = 0;
      }
    } else {
      // Toggle play/pause
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="py-20 bg-[#F5F5F7] flex flex-col w-full relative overflow-hidden">
      {/* Carousel viewport */}
      <div className="relative w-full overflow-hidden h-[400px] sm:h-[600px] lg:h-[711px]">
        {/* Sliding Track */}
        <div
          className="flex h-full transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
          style={{
            transform: `translateX(-${activeIndex * 80}vw)`,
            paddingLeft: "10vw",
            paddingRight: "10vw",
          }}
        >
          {SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={slide.id}
                className="w-[80vw] flex-shrink-0 h-full px-2 sm:px-3 relative"
              >
                <div
                  className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl bg-neutral-200 transition-all duration-700 ${
                    isActive ? "scale-100" : "scale-[0.97] opacity-60"
                  }`}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={slide.video}
                    muted
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Gradient bottom overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

                  {/* Text Overlay in bottom-left */}
                  <div className="absolute bottom-8 left-6 sm:left-10 text-white z-20 text-left max-w-sm sm:max-w-md drop-shadow-md">
                    <h3 className="text-xl sm:text-3.5xl font-semibold tracking-wide leading-tight mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-base italic font-light opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Control bar centered overlay inside slide cards */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {/* Action button: Play, Pause, or Reset */}
          <button
            onClick={handleButtonClick}
            aria-label={
              activeIndex === SLIDES.length - 1 && !isPlaying
                ? "Reset carousel"
                : isPlaying
                ? "Pause auto play"
                : "Play slide show"
            }
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#E5E7EB]/90 hover:bg-[#D1D5DB] text-black shadow-md transition-all duration-300 active:scale-95 cursor-pointer border border-white/20 backdrop-blur-sm"
          >
            {activeIndex === SLIDES.length - 1 && !isPlaying ? (
              // Reset icon (Circular arrow)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4.5 h-4.5 transition-transform duration-500 hover:rotate-180"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            ) : isPlaying ? (
              // Pause icon (Two bars)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                className="w-4.5 h-4.5"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              // Play icon (Triangle)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                className="w-4.5 h-4.5"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            )}
          </button>

          {/* Dots Indicator container */}
          <div className="flex items-center gap-2 h-11 px-7 bg-[#E5E7EB]/90 rounded-full border border-white/20 backdrop-blur-sm shadow-md">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-neutral-800 w-6 opacity-100"
                      : "bg-neutral-500/50 hover:bg-neutral-700 w-1.5 opacity-60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
