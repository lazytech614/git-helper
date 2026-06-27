import { cn } from "@/lib/utils"

interface CategoryFilterProps<T extends string> {
  categories: T[]
  selected: T | "All"
  onChange: (value: T | "All") => void
  allLabel?: string
  className?: string
}

export function CategoryFilter<T extends string>({
  categories,
  selected,
  onChange,
  allLabel = "All",
  className,
}: CategoryFilterProps<T>) {
  const options = [allLabel as T | "All", ...categories]

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-150",
            selected === category
              ? "border-transparent bg-linear-to-r from-purple-600 to-violet-600 text-white shadow-sm"
              : "border-zinc-200 bg-transparent text-zinc-600 hover:border-purple-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-purple-500/40 dark:hover:text-white"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}