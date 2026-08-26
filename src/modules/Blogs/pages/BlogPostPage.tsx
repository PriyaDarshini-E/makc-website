import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import toast from "react-hot-toast";

import useSEO from "@/hooks/useSEO";
import { SITE_URL, BRAND_NAME } from "@/config/seoData";
import {
  getBlogBySlug,
  getRelatedPosts,
  type BlogPost,
} from "../data/mockBlogs";
import ReadingProgress from "../components/ReadingProgress";
import RelatedPosts from "../components/RelatedPosts";
import NewsletterCTA from "../components/NewsletterCTA";
import NotFound from "@/components/common/NotFound";

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

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post: BlogPost | undefined = useMemo(
    () => (slug ? getBlogBySlug(slug) : undefined),
    [slug],
  );

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  // 404 if not found
  if (!post) {
    return <NotFound />;
  }

  const related = getRelatedPosts(post, 3);
  const canonicalUrl = `${SITE_URL}/blogs/${post.slug}`;

  useSEO({
    title: `${post.title} | ${BRAND_NAME}`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    canonicalUrl,
    ogType: "article",
    ogImage: post.imageUrl,
    schemaGraph: [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": post.authorRole,
        },
        "publisher": {
          "@type": "Organization",
          "name": BRAND_NAME,
          "url": SITE_URL,
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
        "articleSection": post.category,
        "keywords": post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${SITE_URL}/blogs`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  });

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Couldn't copy link");
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-main relative overflow-hidden">
      <ReadingProgress />

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/85 to-bg-main/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main/70 to-transparent" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
            <Link
              to="/blogs"
              title="Back to all articles"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors text-xs font-bold uppercase tracking-widest mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>All Articles</span>
            </Link>

            <div
              className={`inline-block backdrop-blur-3xl border px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-5 ${getCategoryStyles(post.category)}`}
            >
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-main tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-xs uppercase">
                  {post.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-text-main font-semibold text-xs">
                    {post.author}
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {post.authorRole}
                  </span>
                </div>
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
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16">
          {/* Share row (sticky-friendly) */}
          <div className="flex items-center justify-between gap-3 mb-10 pb-6 border-b border-border-main/50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
              <Share2 className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
              Share
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={shareOnTwitter}
                title="Share on X / Twitter"
                aria-label="Share on X / Twitter"
                className="w-9 h-9 rounded-full border border-border-main bg-bg-surface text-text-muted hover:bg-black hover:text-white hover:border-black transition-all apple-border-shine"
              >
                <Twitter className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={shareOnLinkedIn}
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 rounded-full border border-border-main bg-bg-surface text-text-muted hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all apple-border-shine"
              >
                <Linkedin className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={copyLink}
                title="Copy link"
                aria-label="Copy link"
                className="w-9 h-9 rounded-full border border-border-main bg-bg-surface text-text-muted hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all apple-border-shine"
              >
                <LinkIcon className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6">
            {post.content.map((section, idx) => {
              if (section.type === "paragraph") {
                return (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-text-muted leading-[1.8] font-medium"
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="text-2xl sm:text-3xl font-serif font-bold text-text-main tracking-tight pt-4"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul
                    key={idx}
                    className="space-y-3 pl-4 border-l-2 border-accent-blue/30 my-2"
                  >
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-base sm:text-lg text-text-muted leading-[1.7] font-medium flex gap-3"
                      >
                        <Check className="w-5 h-5 text-accent-blue shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "quote") {
                return (
                  <blockquote
                    key={idx}
                    className="relative my-8 p-6 sm:p-8 bg-bg-surface border border-border-main rounded-2xl"
                  >
                    <span className="absolute top-3 left-4 text-5xl font-serif text-accent-blue/30 leading-none">
                      &ldquo;
                    </span>
                    <p className="relative text-lg sm:text-xl font-serif italic text-text-main leading-relaxed pl-4">
                      {section.text}
                    </p>
                    {section.author && (
                      <footer className="relative mt-4 pl-4 text-xs font-bold uppercase tracking-widest text-accent-blue">
                        — {section.author}
                      </footer>
                    )}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border-main/50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted block mb-3">
                Tagged With
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-bg-surface border border-border-main text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author bio */}
          <div className="mt-10 p-6 bg-bg-surface border border-border-main rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-lg uppercase shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-base font-serif font-bold text-text-main">
                {post.author}
              </p>
              <p className="text-xs text-accent-blue font-bold uppercase tracking-widest mt-0.5">
                {post.authorRole}
              </p>
              <p className="text-sm text-text-muted leading-relaxed mt-2">
                Writing about smart home design, integration and the future of
                connected living at MAKc Automations.
              </p>
            </div>
          </div>
        </article>

        {/* Related + Newsletter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
          <RelatedPosts posts={related} />
          <NewsletterCTA />
        </div>
      </main>
    </div>
  );
}
