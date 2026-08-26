import { useMemo, useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import FeaturedPost from "../components/FeaturedPost";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import NewsletterCTA from "../components/NewsletterCTA";
import { mockBlogs, getAllCategories } from "../data/mockBlogs";
import useSEO from "@/hooks/useSEO";
import { SEO_ROUTES } from "@/config/seoData";

export default function BlogPage() {
  useSEO(SEO_ROUTES["/blogs"]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  // Simulate network request on first mount only
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => getAllCategories(), []);

  // Featured post = the one flagged as such, else the most recent
  const featured = useMemo(
    () => mockBlogs.find((p) => p.featured) ?? mockBlogs[0],
    [],
  );

  // Posts to show in the grid (exclude featured)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mockBlogs
      .filter((p) => p.id !== featured.id)
      .filter((p) =>
        activeCategory === "All" ? true : p.category === activeCategory,
      )
      .filter((p) => {
        if (!q) return true;
        const haystack = [
          p.title,
          p.excerpt,
          p.author,
          p.category,
          ...p.tags,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
  }, [activeCategory, query, featured]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: 0 };
    for (const p of mockBlogs) {
      if (p.id === featured.id) continue;
      map.All += 1;
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [featured]);

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
            Explore the latest trends, technological advancements, and expert
            advice on building and securing a seamlessly integrated smart home
            ecosystem.
          </p>
        </div>

        {/* Featured Post */}
        {!isLoading && (
          <section className="mb-20">
            <FeaturedPost post={featured} />
          </section>
        )}

        {/* Search + Category Filter */}
        <section>
          <div className="mb-10">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
              counts={counts}
            />
          </div>

          {/* Results header */}
          {!isLoading && (
            <div className="flex items-center justify-between mb-6 text-xs text-text-muted">
              <p>
                {filtered.length === 0
                  ? "No articles"
                  : `Showing ${filtered.length} article${filtered.length === 1 ? "" : "s"}`}
                {(activeCategory !== "All" || query) && (
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setQuery("");
                    }}
                    title="Clear filters"
                    className="ml-3 text-accent-blue hover:underline font-semibold"
                  >
                    Clear filters
                  </button>
                )}
              </p>
            </div>
          )}

          {/* Blog Listing */}
          <BlogList isLoading={isLoading} posts={filtered} />
        </section>

        {/* Newsletter */}
        <div className="mt-24">
          <NewsletterCTA />
        </div>
      </main>
    </div>
  );
}
