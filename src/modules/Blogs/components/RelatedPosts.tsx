import type { BlogPost } from "../data/mockBlogs";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;
  return (
    <section className="border-t border-border-main/50 pt-16">
      <div className="mb-10">
        <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-2">
          Keep Reading
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-text-main">
          Related Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
