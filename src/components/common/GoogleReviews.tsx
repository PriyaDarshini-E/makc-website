import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Star, ExternalLink, Quote } from "lucide-react";

interface GoogleReview {
  author: string;
  text: string;
  stars: number;
}

const reviews: GoogleReview[] = [
  {
    author: "Prabhakara Sastry",
    text: "MAKc Automation and Solutions, under the leadership of Abhay Kumar, transformed my new house into a fully automated haven. From installation to technical support, including security cameras and doors, every aspect was exemplary. Their professionalism, punctuality, and quality exceeded my expectations.",
    stars: 5,
  },
  {
    author: "Harish Bhat",
    text: "Professional service, great quality material and efficient and well managed service. Their Ajax systems are excellent.",
    stars: 5,
  },
  {
    author: "Awes Desai",
    text: "I had a good experience with Mak automation. They are very accommodating of the changes on the fly and post completion support is also good.",
    stars: 5,
  },
  {
    author: "Sanjay Kumar",
    text: "Makc automation and solution helped me get my new house completely automated so I can have the control overseas. They are really good when it comes to work on time. Thanks to Abhay Kumar, MD of MAKc Automation.",
    stars: 5,
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=MAKc+Automation+and+Solutions+LLP+reviews";

export default function GoogleReviews() {
  return (
    <section className="relative w-full py-20 lg:py-28 border-t border-border-main overflow-hidden bg-bg-main">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,132,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            {/* Google "G" logo */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-accent-blue uppercase select-none">
              Google Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-main mb-4 font-display">
            Trusted by Homeowners
          </h2>
          <p className="text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
            See what our clients have to say about their smart home experience
            with MAKc Automations.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative px-6 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.author}
                  className="pl-4 sm:pl-6 basis-full md:basis-1/2"
                >
                  <Card className="h-full bg-bg-surface/50 dark:bg-bg-surface/30 backdrop-blur-xl border border-border-main/50 dark:border-border-main/20 hover:border-accent-blue/40 hover:shadow-[0_8px_30px_rgb(10,132,255,0.04)] dark:hover:shadow-[0_8px_30px_rgb(10,132,255,0.1)] transition-all duration-500 rounded-2xl overflow-hidden group">
                    <CardContent className="p-6 sm:p-8 flex flex-col gap-4 h-full">
                      {/* Top: Stars + Quote icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.stars)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <Quote className="h-7 w-7 text-accent-blue/15 dark:text-accent-blue/10 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Review text */}
                      <blockquote className="text-sm sm:text-[15px] text-text-main/90 font-normal leading-relaxed italic flex-1">
                        &ldquo;{review.text}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border-main/30 dark:border-border-main/10">
                        <div className="h-9 w-9 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-xs font-bold shrink-0">
                          {review.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <span className="text-sm font-semibold text-text-main">
                          {review.author}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 sm:-left-2 z-20">
              <CarouselPrevious className="h-10 w-10 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white! transition-all duration-300 cursor-pointer" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 sm:-right-2 z-20">
              <CarouselNext className="h-10 w-10 border-border-main/50 bg-bg-surface/80 text-text-main shadow-md hover:bg-accent-blue hover:text-white! transition-all duration-300 cursor-pointer" />
            </div>
          </Carousel>
        </div>

        {/* View More Reviews CTA */}
        <div className="text-center mt-6">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#0055ff] to-[#0A84FF] text-white! font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-[0_4px_20px_rgba(10,132,255,0.45)] hover:shadow-[0_6px_25px_rgba(10,132,255,0.65)] hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
          >
            <span>View More Reviews on Google</span>
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
