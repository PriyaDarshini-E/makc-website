import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import { mockBlogs } from "../data/mockBlogs";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";

export default function BlogPage() {
  useSEO(SEO_ROUTES["/blogs"]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network request
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s simulated loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main flex flex-col relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,132,255,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,132,255,0.05),transparent_50%)] pointer-events-none" />

      <main className="flex-1 relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <span>Journal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-main tracking-tight mb-6 leading-[1.1]">
            Insights for the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-400">
              Modern Connected Home
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Explore the latest trends, technological advancements, and expert advice on building and securing a seamlessly integrated smart home ecosystem.
          </p>
        </div>

        {/* Blog Listing */}
        <section>
          <BlogList isLoading={isLoading} posts={mockBlogs} />
        </section>

      </main>
    </div>
  );
}
