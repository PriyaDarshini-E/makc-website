import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "../data/mockBlogs";

interface FeaturedPostProps {
  post: BlogPost;
}

const getCategoryStyles = (category: string) => {
  switch (category.toLowerCase()) {
    case "lighting":
      return "bg-amber-500/60 text-amber-300 border-amber-500/30";
    case "security":
      return "bg-rose-500/60 text-rose-300 border-rose-500/30";
    case "automation":
      return "bg-blue-500/60 text-blue-300 border-blue-500/30";
    case "networking":
      return "bg-emerald-500/60 text-emerald-300 border-emerald-500/30";
    case "design":
      return "bg-purple-500/60 text-purple-300 border-purple-500/30";
    default:
      return "bg-black/40 text-white border-white/10";
  }
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      title={post.title}
      className="group block relative bg-bg-surface border border-border-main rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent-blue/30 hover:shadow-2xl reveal-on-scroll reveal-up"
      data-reveal-duration="0.8s"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-neutral-900">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div
            className={`absolute top-4 left-4 backdrop-blur-3xl border px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${getCategoryStyles(post.category)}`}
          >
            {post.category}
          </div>
          <div className="absolute top-4 right-4 backdrop-blur-3xl bg-accent-blue/70 text-white border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
          <span className="text-accent-blue text-[10px] font-bold uppercase tracking-widest block mb-3">
            Editor's Pick
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-text-main leading-tight mb-4 group-hover:text-accent-blue transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted mb-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-[10px] uppercase">
                {post.author.charAt(0)}
              </div>
              <span className="font-semibold text-text-main">
                {post.author}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.displayDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-accent-blue font-bold text-xs tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
            <span>Read the full story</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
