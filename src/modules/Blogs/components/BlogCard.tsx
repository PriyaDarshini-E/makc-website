import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../data/mockBlogs";

interface BlogCardProps {
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

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      title={post.title}
      className="group relative flex flex-col bg-bg-surface border border-border-main rounded-2xl overflow-hidden transition-all hover:border-accent-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(10,132,255,0.15)] duration-500 apple-border-shine"
    >
      <article className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-neutral-900 border-b border-border-main">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Category Badge */}
          <div
            className={`absolute top-3 left-3 backdrop-blur-3xl border px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${getCategoryStyles(post.category)}`}
          >
            {post.category}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-text-muted mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              <span>{post.displayDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-text-main leading-tight mb-2 group-hover:text-accent-blue transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="pt-3 border-t border-border-main/50 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-[10px] uppercase">
                {post.author.charAt(0)}
              </div>
              <span className="text-[11px] font-semibold text-text-main">
                {post.author}
              </span>
            </div>

            <div className="w-7 h-7 rounded-full bg-bg-main border border-border-main flex items-center justify-center text-text-muted group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
