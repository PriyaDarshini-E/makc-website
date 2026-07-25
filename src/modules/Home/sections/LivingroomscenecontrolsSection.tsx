import { useRef, useState, useCallback, useEffect } from "react";

// this is perfect timing for the video segments, but if the video is changed, these will need to be updated
const MODES = {
  night: { label: "Select night mode", start: 2.1, end: 3.9 },
  theater: { label: "Select theater mode", start: 3.9, end: 5.8 },
  morning: { label: "Select morning mode", start: 5.9, end: 9.8 },
  evening: { label: "Select evening mode", start: 10.9, end: 12.0 },
};

const VIDEO_SRC = "/Video/living_room_animation.mp4";

const MODE_DEFS = [
  {
    key: "night",
    label: "Night",
    ariaLabel: "Select night mode",
    activeClasses:
      "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    icon: (
      <svg
        width="41"
        height="34"
        viewBox="0 0 41 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 stroke-current"
      >
        <path
          d="M29.6379 24.1855C35.3603 23.5093 39.7948 18.7426 39.7948 12.9626C39.7948 12.7119 39.7847 12.4645 39.768 12.2183H39.7197C38.3968 14.7215 35.7276 16.433 32.6482 16.433C28.2533 16.433 24.6907 12.9478 24.6907 8.6485C24.6907 5.63506 26.4412 3.02355 29.0005 1.72933V1.68254C28.7479 1.66587 28.4939 1.65625 28.2372 1.65625C21.854 1.65625 16.6797 6.71839 16.6797 12.9626C16.6797 13.5504 16.7253 14.1279 16.8137 14.6914"
          strokeWidth="2.30767"
          strokeMiterlimit="22.9256"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.4075 32.507C4.30802 32.507 1.79492 30.0487 1.79492 27.0167C1.79492 24.2244 3.92671 21.9206 6.68507 21.5731C6.98664 17.5533 10.4165 14.3828 14.603 14.3828C17.9404 14.3828 20.7959 16.3969 21.9707 19.2501C22.3185 19.1962 22.675 19.1687 23.0382 19.1687C26.2349 19.1687 28.9169 21.3199 29.6547 24.2231C31.956 24.2654 33.8083 26.1026 33.8083 28.3641C33.8083 30.6519 31.9118 32.507 29.5729 32.507H7.4075Z"
          strokeWidth="2.30767"
          strokeMiterlimit="22.9256"
        />
      </svg>
    ),
  },
  {
    key: "theater",
    label: "Theater",
    ariaLabel: "Select theater mode",
    activeClasses:
      "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    icon: (
      <svg
        width="40"
        height="33"
        viewBox="0 0 40 33"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M27.8633 22.2914L34.7517 26.2672C35.0285 26.4263 35.3215 26.4988 35.6054 26.4988C35.9105 26.4988 36.2065 26.4152 36.4622 26.2682C36.7209 26.1192 36.9424 25.9028 37.0945 25.64C37.2344 25.3994 37.316 25.1094 37.316 24.7872V16.8296C37.316 16.5085 37.2334 16.2195 37.0945 15.9779C36.9444 15.7141 36.723 15.5007 36.4622 15.3497C36.2065 15.2017 35.9105 15.1181 35.6044 15.1181C35.3195 15.1181 35.0245 15.1906 34.7517 15.3497L27.8633 19.3255C27.5874 19.4865 27.378 19.703 27.2361 19.9476C27.085 20.2064 27.0115 20.5064 27.0115 20.8094C27.0115 21.1105 27.086 21.4085 27.2371 21.6692C27.378 21.9129 27.5874 22.1303 27.8633 22.2914ZM34.0147 27.5438L27.1273 23.567C26.6138 23.272 26.2252 22.8693 25.9604 22.4092C25.6745 21.9139 25.5316 21.3612 25.5316 20.8094C25.5316 20.2597 25.6745 19.705 25.9594 19.2117C26.2252 18.7475 26.6128 18.3449 27.1243 18.0499L34.0177 14.0721C34.5322 13.7761 35.0769 13.6401 35.6044 13.6401C36.1702 13.6401 36.7209 13.7952 37.2012 14.0721C37.6764 14.3469 38.0851 14.7456 38.3701 15.2389C38.6389 15.7 38.7949 16.2407 38.7949 16.8296V24.7872C38.7949 25.3752 38.6389 25.9138 38.3711 26.3769C38.0882 26.8693 37.6794 27.269 37.2012 27.5448C36.7209 27.8227 36.1702 27.9777 35.6054 27.9777C35.0749 27.9777 34.5292 27.8418 34.0147 27.5438ZM20.2117 32.0854H7.32692C5.5268 32.0854 3.89379 31.3545 2.71183 30.1715C1.52684 28.9855 0.794922 27.3535 0.794922 25.5544V18.0972C0.794922 16.294 1.52685 14.662 2.70881 13.4791C3.89279 12.3001 5.52478 11.5672 7.32692 11.5672H20.2117C22.0129 11.5672 23.6459 12.3001 24.8268 13.4791C26.0108 14.662 26.7427 16.294 26.7427 18.0972V25.5544C26.7427 27.3555 26.0108 28.9875 24.8298 30.1695C23.6479 31.3545 22.0149 32.0854 20.2117 32.0854ZM7.32692 30.6065H20.2117C21.6071 30.6065 22.8696 30.0406 23.7848 29.1275C24.699 28.2143 25.2638 26.9498 25.2638 25.5544V18.0972C25.2638 16.7018 24.698 15.4393 23.7848 14.5251C22.8717 13.6109 21.6081 13.0461 20.2117 13.0461H7.32692C5.92951 13.0461 4.66701 13.611 3.75285 14.5241C2.8397 15.4393 2.27389 16.7018 2.27389 18.0972V25.5544C2.27389 26.9518 2.83868 28.2143 3.75183 29.1265C4.667 30.0416 5.9285 30.6065 7.32692 30.6065ZM11.4457 7.93874C11.4457 6.98129 11.0591 6.11547 10.4349 5.49327C9.80663 4.86706 8.9408 4.47944 7.98637 4.47944C7.02791 4.47944 6.16108 4.86706 5.53486 5.49327C4.91065 6.11547 4.52404 6.98129 4.52404 7.93874C4.52404 8.89619 4.91065 9.76101 5.53486 10.3852C6.16108 11.0104 7.02791 11.3981 7.98637 11.3981C8.9408 11.3981 9.80662 11.0104 10.4318 10.3852C11.0591 9.76101 11.4457 8.89619 11.4457 7.93874ZM11.4769 4.44722C12.3709 5.34326 12.9246 6.57757 12.9246 7.93874C12.9246 9.29991 12.3709 10.5342 11.4759 11.4282C10.5849 12.3243 9.34855 12.878 7.98637 12.878C6.62319 12.878 5.38887 12.3243 4.49485 11.4303C3.59982 10.5352 3.04609 9.30091 3.04609 7.93874C3.04609 6.57656 3.59982 5.34226 4.49485 4.44622C5.38887 3.5532 6.62319 3.00048 7.98637 3.00048C9.34855 3.00048 10.5849 3.5532 11.4769 4.44722ZM25.1621 7.02357C25.1621 7.43132 24.8318 7.76255 24.4221 7.76255C24.0143 7.76255 23.6831 7.43132 23.6831 7.02357C23.6831 5.76811 23.1747 4.63147 22.3521 3.80993C21.5306 2.9884 20.394 2.47897 19.1395 2.47897C17.882 2.47897 16.7454 2.98637 15.9258 3.8069C15.1033 4.62944 14.5949 5.7661 14.5949 7.02357C14.5949 8.27802 15.1043 9.41468 15.9258 10.2372C16.7474 11.0588 17.885 11.5672 19.1395 11.5672C19.5483 11.5672 19.8785 11.8984 19.8785 12.3072C19.8785 12.7149 19.5483 13.0461 19.1395 13.0461C17.4773 13.0461 15.9701 12.3726 14.8808 11.2823C13.7905 10.1919 13.1159 8.68476 13.1159 7.02357C13.1159 5.36439 13.7905 3.85826 14.8808 2.76791C15.9742 1.67454 17.4803 1 19.1395 1C20.8017 1 22.3079 1.67455 23.3972 2.7649C24.4875 3.85423 25.1621 5.36036 25.1621 7.02357Z"
          strokeWidth="1.1875"
        />
      </svg>
    ),
  },
  {
    key: "morning",
    label: "Morning",
    ariaLabel: "Select morning mode",
    activeClasses:
      "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M10.998 1.99951V5.73436"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
        <path
          d="M18.0977 1.99951V5.73436"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
        <path
          d="M25.209 1.99951V5.73436"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
        <path
          d="M34.1951 40.1626H2"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.96842 12.3652H29.8397C31.9572 12.3652 34.2442 14.2913 33.6887 16.468L32.0396 22.9307C30.3717 29.4621 26.8424 35.2396 20.4926 35.2396H15.3155C8.9664 35.2396 5.43637 29.4634 3.76918 22.9307L2.11943 16.468C1.56459 14.2907 3.85228 12.3652 5.96842 12.3652Z"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
        <path
          d="M33.4766 19.4321H37.8194C39.7265 19.4321 40.2331 20.6147 39.9081 21.7069L38.4554 26.5801C38.2034 27.4268 37.7075 28.194 36.8063 28.194H30.1777"
          strokeWidth="2.30744"
          strokeMiterlimit="22.9256"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "evening",
    label: "Evening",
    ariaLabel: "Select evening mode",
    activeClasses:
      "bg-orange-500/10 border-orange-500/40 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    icon: (
      <svg
        width="40"
        height="35"
        viewBox="0 0 40 35"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M28.2049 19.7016C28.2049 22.0927 27.2353 24.2593 25.6677 25.8269C24.1001 27.3935 21.9345 28.3631 19.5444 28.3631C17.1552 28.3631 14.9915 27.3935 13.4229 25.8249C11.8534 24.2593 10.8848 22.0927 10.8848 19.7016C10.8848 17.3144 11.8534 15.1497 13.421 13.5821C14.9886 12.0155 17.1562 11.042 19.5444 11.042C21.9335 11.042 24.0991 12.0126 25.6658 13.5792C27.2343 15.1478 28.2049 17.3124 28.2049 19.7016ZM24.6658 24.825C25.9765 23.5132 26.7883 21.7025 26.7883 19.7016C26.7883 17.7006 25.9775 15.8889 24.6697 14.5801C23.358 13.2704 21.5463 12.4596 19.5444 12.4596C17.5424 12.4596 15.7317 13.2684 14.4229 14.5782C13.1112 15.8889 12.3014 17.7006 12.3014 19.7016C12.3014 21.7015 13.1122 23.5142 14.4229 24.824C15.7317 26.1357 17.5434 26.9465 19.5444 26.9465C21.5443 26.9465 23.355 26.1347 24.6658 24.825Z"
          strokeWidth="1.1875"
        />
        <path
          d="M1.50375 28.3659C1.1116 28.3659 0.794922 28.0492 0.794922 27.659C0.794922 27.2669 1.1116 26.9492 1.50375 26.9492H38.0861C38.4773 26.9492 38.7949 27.2669 38.7949 27.659C38.7949 28.0492 38.4773 28.3659 38.0861 28.3659H1.50375Z"
          strokeWidth="1.1875"
        />
        <path
          d="M8.48809 34.1822C8.09791 34.1822 7.78125 33.8646 7.78125 33.4744C7.78125 33.0833 8.09791 32.7656 8.48809 32.7656H30.6248C31.0169 32.7656 31.3336 33.0833 31.3336 33.4744C31.3336 33.8646 31.0169 34.1822 30.6248 34.1822H8.48809Z"
          strokeWidth="1.1875"
        />
        <path
          d="M20.2477 7.75881C20.2477 8.14997 19.93 8.46662 19.5389 8.46662C19.1467 8.46662 18.8301 8.14997 18.8301 7.75881V1.79328C18.8301 1.40212 19.1467 1.08545 19.5389 1.08545C19.93 1.08545 20.2477 1.40212 20.2477 1.79328V7.75881Z"
          strokeWidth="1.1875"
        />
        <path
          d="M31.4891 20.4103C31.0969 20.4103 30.7793 20.0936 30.7793 19.7015C30.7793 19.3103 31.0969 18.9927 31.4891 18.9927H37.4517C37.8428 18.9927 38.1605 19.3103 38.1605 19.7015C38.1605 20.0936 37.8428 20.4103 37.4517 20.4103H31.4891Z"
          strokeWidth="1.1875"
        />
        <path
          d="M1.63751 20.4103C1.24635 20.4103 0.927734 20.0936 0.927734 19.7015C0.927734 19.3103 1.24635 18.9927 1.63751 18.9927H7.60207C7.99323 18.9927 8.31087 19.3103 8.31087 19.7015C8.31087 20.0936 7.99323 20.4103 7.60207 20.4103H1.63751Z"
          strokeWidth="1.1875"
        />
        <path
          d="M11.6023 10.7577C11.8778 11.0331 11.8778 11.4821 11.6023 11.7586C11.3249 12.0351 10.8759 12.0351 10.6004 11.7586L6.38386 7.54204C6.10642 7.26558 6.10642 6.8156 6.38386 6.54011C6.65935 6.26267 7.10835 6.26267 7.38579 6.54011L11.6023 10.7577Z"
          strokeWidth="1.1875"
        />
        <path
          d="M28.1896 11.5558C27.8991 11.8464 27.4267 11.8453 27.1362 11.5527C26.8468 11.2622 26.8478 10.7896 27.1393 10.4991L31.5874 6.05194C31.8789 5.76242 32.3513 5.76346 32.6407 6.05401C32.9312 6.34663 32.9291 6.81914 32.6376 7.10969L28.1896 11.5558Z"
          strokeWidth="1.1875"
        />
      </svg>
    ),
  },
];

export default function LivingRoomSceneControlsSection() {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const transitionCleanupRef = useRef<(() => void) | null>(null);

  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const [activeMode, setActiveMode] = useState<string>("evening");

  const goToMode = useCallback(
    (key: keyof typeof MODES) => {
      if (activeMode === key) return;

      const currentVid =
        activeVideo === "A" ? videoRefA.current : videoRefB.current;
      const nextVid =
        activeVideo === "A" ? videoRefB.current : videoRefA.current;
      const scene = MODES[key];

      if (!nextVid || !scene) return;

      // Clean up any pending transition listeners from a previous click
      if (transitionCleanupRef.current) {
        transitionCleanupRef.current();
        transitionCleanupRef.current = null;
      }

      // Cancel any existing raf checker loop
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      // Pause the old video immediately to save CPU/GPU cycles
      if (currentVid) {
        currentVid.pause();
      }

      // Set up next video segment start
      nextVid.currentTime = scene.start;

      let fallbackTriggered = false;
      let timeoutId: number | undefined;

      const triggerTransition = () => {
        if (fallbackTriggered) return;
        fallbackTriggered = true;

        setActiveVideo(activeVideo === "A" ? "B" : "A");
        setActiveMode(key);

        cleanup();
      };

      const cleanup = () => {
        nextVid.removeEventListener("playing", triggerTransition);
        nextVid.removeEventListener("seeked", triggerTransition);
        if (timeoutId) clearTimeout(timeoutId);
        transitionCleanupRef.current = null;
      };

      nextVid.addEventListener("playing", triggerTransition);
      nextVid.addEventListener("seeked", triggerTransition);
      timeoutId = window.setTimeout(triggerTransition, 250);

      transitionCleanupRef.current = cleanup;

      // Play next video
      const playPromise = nextVid.play();
      if (playPromise) {
        playPromise.catch((err) => {
          console.warn("Playback prevented or failed:", err);
        });
      }

      // Start high-precision checker loop
      const checkTime = () => {
        if (nextVid.currentTime >= scene.end) {
          nextVid.pause();
          nextVid.currentTime = scene.end;
          rafIdRef.current = null;
        } else {
          rafIdRef.current = requestAnimationFrame(checkTime);
        }
      };
      rafIdRef.current = requestAnimationFrame(checkTime);
    },
    [activeVideo, activeMode],
  );

  // Initial seek to default mode start on mount
  useEffect(() => {
    const video = videoRefA.current;
    if (video) {
      video.currentTime = MODES[activeMode as keyof typeof MODES].start;
    }
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (transitionCleanupRef.current) {
        transitionCleanupRef.current();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Video A */}
      <video
        ref={videoRefA}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ease-in-out ${
          activeVideo === "A" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        muted
        playsInline
        preload="auto"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Video B */}
      <video
        ref={videoRefB}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ease-in-out ${
          activeVideo === "B" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        muted
        playsInline
        preload="auto"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Control panel container */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 absolute bottom-8 sm:bottom-12 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-[5%] lg:right-[8%] rounded-2xl p-4 sm:p-6 backdrop-blur-md bg-black/40 border border-white/10 shadow-2xl max-w-sm w-[90%] sm:w-auto z-20">
        {MODE_DEFS.map((def) => {
          const isActive = activeMode === def.key;
          return (
            <button
              key={def.key}
              type="button"
              onClick={() => goToMode(def.key as keyof typeof MODES)}
              aria-label={def.ariaLabel}
              aria-pressed={isActive}
              className={`group flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer select-none min-w-[100px] sm:min-w-[120px] ${
                isActive
                  ? `${def.activeClasses} scale-[1.03]`
                  : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-white/60 hover:text-white/90 hover:scale-[1.01]"
              }`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {def.icon}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-2 block">
                {def.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
