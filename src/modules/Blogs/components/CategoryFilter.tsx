interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
  counts?: Record<string, number>;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 justify-center mb-10 reveal-on-scroll reveal-up">
      {categories.map((category) => {
        const isActive = active === category;
        const count = counts?.[category];
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            title={
              count !== undefined
                ? `${count} post${count === 1 ? "" : "s"} in ${category}`
                : `Filter by ${category}`
            }
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
              isActive
                ? "bg-accent-blue text-white border-accent-blue shadow-md"
                : "bg-bg-surface text-text-muted border-border-main hover:border-accent-blue/50 hover:text-accent-blue"
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`ml-1.5 text-[10px] ${
                  isActive ? "text-white/80" : "text-text-muted/70"
                }`}
              >
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
