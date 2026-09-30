export default function ProjectCardSkeleton() {
  return (
    <div className="grid animate-pulse gap-3 border-b border-line py-6 dark:border-white/10 md:grid-cols-12" aria-hidden="true">
      <div className="h-4 w-28 rounded bg-line dark:bg-white/10 md:col-span-3" />
      <div className="space-y-2 md:col-span-7">
        <div className="h-5 w-2/3 rounded bg-line dark:bg-white/10" />
        <div className="h-4 w-full rounded bg-line/70 dark:bg-white/5" />
      </div>
      <div className="h-4 w-16 rounded bg-line dark:bg-white/10 md:col-span-2 md:justify-self-end" />
    </div>
  )
}
