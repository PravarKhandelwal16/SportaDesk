export default function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`shimmer rounded-xl bg-white/5 ${className}`} />
  )
}

export function TournamentCardSkeleton() {
  return (
    <div className="glass rounded-2xl p-5 space-y-4">
      <SkeletonLoader className="h-5 w-3/4" />
      <SkeletonLoader className="h-4 w-1/2" />
      <div className="flex gap-2">
        <SkeletonLoader className="h-6 w-16 rounded-full" />
        <SkeletonLoader className="h-6 w-20 rounded-full" />
      </div>
      <SkeletonLoader className="h-10 w-full rounded-xl" />
    </div>
  )
}

export function StatsCardSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 space-y-3">
      <SkeletonLoader className="h-4 w-24" />
      <SkeletonLoader className="h-8 w-20" />
      <SkeletonLoader className="h-3 w-32" />
    </div>
  )
}
