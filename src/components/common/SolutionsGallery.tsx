import { getImageUrl } from "@/utils/image";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const columns = [
  // Column 1 (Left column in wireframe)
  [
    { src: getImageUrl("Rectangle 54361.webp"), alt: "Cozy interior living room swing and sofa layout", title: "Luxury Smart Living Room Interior Design" },
    { src: getImageUrl("Rectangle 54366.webp"), alt: "Smart touch panel control plate on grooved wall panels", title: "Smart Touch Panel Control System" },
    { src: getImageUrl("Rectangle 54367.webp"), alt: "Modern double story villa facade view at sunset", title: "Modern Smart Villa Automation Design" }
  ],
  // Column 2 (Middle column in wireframe)
  [
    { src: getImageUrl("Rectangle 54360.webp"), alt: "Close up of touch pad switch mounted on wood panels", title: "Smart Touch Switch Installation" },
    { src: getImageUrl("Rectangle 54368.webp"), alt: "Luxury bedroom design with warm cove lights and watermark", title: "Luxury Smart Bedroom Lighting Design" },
    { src: getImageUrl("Rectangle 54364.webp"), alt: "Matte black socket outlets on wood boards with leaves decoration", title: "Modern Smart Socket and Switch Solutions" }
  ],
  // Column 3 (Right column in wireframe)
  [
    { src: getImageUrl("Rectangle 54362.webp"), alt: "Sleek biometric finger print door lock panel", title: "Biometric Smart Door Lock System" },
    { src: getImageUrl("Rectangle 54363.webp"), alt: "Temple room background with backlit wall decoration", title: "Smart Temple Room Lighting Design" },
    { src: getImageUrl("Group 212355.webp"), alt: "Luxury entrance door lock handle mechanism close up", title: "Luxury Smart Door Lock Installation" }
  ]
];

export default function SolutionsGallery() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto no-reveal">
      
      {/* Title */}
      <h2 className="gallery-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main text-center mb-16 font-sans">
        MAKc Gallery
      </h2>

      {/* Masonry Layout: 3 Columns */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {columns.map((col, colIdx) => (
          <div 
            key={colIdx} 
            className="gallery-col w-full md:w-1/3 flex flex-col gap-6 md:gap-8"
          >
            {col.map((item, itemIdx) => (
              <div 
                key={itemIdx}
                className="relative overflow-hidden rounded-[2rem] border border-border-main/30 shadow-md group bg-neutral-900 aspect-[4/3] md:aspect-auto"
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  title={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Subtle dark ambient overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-start mt-8">
        <Link 
          to="/experience" 
          title="Experience Smart Living"
          className="home-wave-cta cursor-pointer apple-border-shine flex rounded-full items-center gap-2 border border-border-main/50 text-text-main px-8 py-3.5 uppercase text-[10px] sm:text-[11px] font-bold tracking-widest bg-transparent" 
          style={{ "--cta-accent": "#0A84FF" } as React.CSSProperties}
        >
          <span className="relative z-10">View More</span>
          <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

    </section>
  );
}
