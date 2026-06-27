interface StatusBarProps<T> {
  items: T[]
  getName: (item: T) => string

  itemLabel?: string
  maxPreview?: number

  className?: string
}

export function StatusBar<T>({
  items,
  getName,
  itemLabel = "item",
  maxPreview = 6,
  className,
}: StatusBarProps<T>) {
  const names = items.slice(0, maxPreview).map(getName)
  const overflow = items.length - names.length

  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white">
        {itemLabel} status: {items.length} active{" "}
        {items.length === 1 ? itemLabel : `${itemLabel}s`}
      </p>

      <p className="mt-0.5 max-w-xs text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500 md:ml-auto">
        {names.join(" · ")}
        {overflow > 0 && ` · +${overflow} more`}
      </p>
    </div>
  )
}