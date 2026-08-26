import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";
import type { BlogPost } from "../data/mockBlogs";

interface BlogListProps {
  isLoading: boolean;
  posts: BlogPost[];
}

export default function BlogList({ isLoading, posts }: BlogListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 mx-auto rounded-full bg-bg-surface border border-border-main flex items-center justify-center text-text-muted mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h3 className="text-lg font-serif font-bold text-text-main mb-1">
          No articles match your search
        </h3>
        <p className="text-sm text-text-muted">
          Try a different keyword or browse all categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
