import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search articles, topics, tags…",
}: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto mb-8 reveal-on-scroll reveal-up">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title="Search blog posts"
        aria-label="Search blog posts"
        className="w-full pl-11 pr-10 py-3 bg-bg-surface border border-border-main rounded-full text-sm text-text-main placeholder:text-text-muted/70 focus:outline-none focus:border-accent-blue/50 focus:ring-2 focus:ring-accent-blue/20 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          title="Clear search"
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg-main border border-border-main flex items-center justify-center text-text-muted hover:text-text-main hover:border-accent-blue/50 transition-all"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
