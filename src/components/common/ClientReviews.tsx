import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { getImageUrl } from "@/utils/image";

interface Review {
  stars: number;
  text: string;
  author: string;
  role: string;
  project: string;
  image: string;
}

const reviews: Review[] = [
  {
    stars: 5,
    text: "MAKc transformed our villa into a fully automated sanctuary. The lighting scenes, home theater controls, and climate automation work flawlessly. Truly world-class craftsmanship and support.",
    author: "Arjun & Priya Mehta",
    role: "Villa Owner, Hyderabad",
    project: "Smart Luxury Villa",
    image: getImageUrl("project_villas.webp"),
  },
  {
    stars: 5,
    text: "The attention to detail in their networking and smart lighting layout is remarkable. Everything integrates perfectly under one sleek touch panel. Luxury living made completely effortless.",
    author: "Rohan Sethi",
    role: "Penthouse Owner, Bangalore",
    project: "High-Rise Penthouse",
    image: getImageUrl("project_penthouses.webp"),
  },
  {
    stars: 5,
    text: "Extremely professional team. Their home security integration with smart AI cameras and remote access gives us complete peace of mind. Highly recommend their automation expertise.",
    author: "Dr. Srinivas Rao",
    role: "Estate Owner, Bangalore",
    project: "Legacy Farmhouse",
    image: getImageUrl("project_farmhouses.webp"),
  },
  {
    stars: 5,
    text: "The multi-room audio and centralized smart switches they installed have completely upgraded our daily living experience. They took care of everything from planning to clean setup.",
    author: "Meera Krishnan",
    role: "Apartment Owner, Bangalore",
    project: "Modern Duplex Apartment",
    image: getImageUrl("project_apartments.webp"),
  },
];

export default function ClientReviews() {
  return (
    <section className="relative w-full py-20 lg:py-28 border-t border-border-main overflow-hidden bg-bg-main">
      {/* Radiant Glow overlays to make it feel premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(10,132,255,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(10,132,255,0.04)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-accent-blue uppercase mb-3 block select-none">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main mb-4 font-display">
            Loved by Homeowners.<br />Built for Luxury.
          </h2>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
            Discover why Bangalore's most discerning families trust MAKc Automations to design and install their smart home environments.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-6 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {reviews.map((review, index) => {
                const initials = review.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .substring(0, 2);

                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 sm:pl-6 basis-full md:basis-1/2"
                  >
                    <Card className="h-full bg-bg-surface/50 dark:bg-bg-surface/30 backdrop-blur-xl border border-border-main/50 dark:border-border-main/20 hover:border-accent-blue/40 hover:shadow-[0_8px_30px_rgb(10,132,255,0.04)] dark:hover:shadow-[0_8px_30px_rgb(10,132,255,0.1)] transition-all duration-500 rounded-2xl flex flex-col justify-between overflow-hidden group">
                      <CardContent className="p-8 flex flex-col justify-between h-full">
                        <div>
                          {/* Top Row: Stars and Quote / Badge */}
                          <div className="flex justify-between items-start gap-4 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                              {review.project}
                            </span>
                            <Quote className="h-8 w-8 text-accent-blue/20 dark:text-accent-blue/10 shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                          </div>

                          {/* Testimonial text */}
                          <blockquote className="text-sm sm:text-base text-text-main/95 font-normal leading-relaxed italic mb-8 font-sans">
                            "{review.text}"
                          </blockquote>
                        </div>

                        {/* Bottom Row: Author details */}
                        <div className="flex items-center gap-4 border-t border-border-main/40 dark:border-border-main/10 pt-6">
                          <Avatar className="h-12 w-12 border border-accent-blue/20 bg-bg-main relative">
                            {review.image && (
                              <AvatarImage
                                src={review.image}
                                alt={review.author}
                                className="object-cover"
                              />
                            )}
                            <AvatarFallback className="font-bold text-accent-blue text-sm bg-accent-blue/5">
                              {initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-sans text-sm sm:text-base font-bold text-text-main leading-tight truncate">
                              {review.author}
                            </h4>
                            <span className="font-sans text-xs text-text-muted mt-1 block">
                              {review.role}
                            </span>
                          </div>
                          <div className="flex items-center gap-0.5 text-accent-blue shrink-0">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3.5 w-3.5 fill-current stroke-none"
                              />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Custom Carousel Arrows */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 sm:-left-2 z-20">
              <CarouselPrevious className="h-10 w-10 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white transition-all duration-300 cursor-pointer" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 sm:-right-2 z-20">
              <CarouselNext className="h-10 w-10 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white transition-all duration-300 cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
