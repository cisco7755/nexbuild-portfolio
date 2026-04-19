export default function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden animate-pulse">
      <div className="h-48 bg-slate-100 dark:bg-slate-800" />
      <div className="p-6 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-slate-100 dark:bg-slate-800" />
          <div className="h-5 w-20 rounded-full bg-slate-100 dark:bg-slate-800" />
        </div>
        <div className="h-6 w-3/4 rounded-lg bg-slate-100 dark:bg-slate-800" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-800" />
          <div className="h-4 w-5/6 rounded bg-slate-100 dark:bg-slate-800" />
        </div>
        <div className="flex gap-4 pt-2">
          <div className="h-8 w-20 rounded-lg bg-slate-100 dark:bg-slate-800" />
          <div className="h-8 w-20 rounded-lg bg-slate-100 dark:bg-slate-800" />
          <div className="h-8 w-16 rounded-lg bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  )
}
