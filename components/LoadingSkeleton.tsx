export function ExperienceCardSkeleton() {
  return (
    <div className="w-full animate-pulse overflow-hidden rounded-2xl border border-char-line bg-char-soft">
      <div className="h-48 w-full bg-char-line" />
      <div className="space-y-3 p-5">
        <div className="h-4 w-2/3 rounded bg-char-line" />
        <div className="h-3 w-1/2 rounded bg-char-line" />
        <div className="h-3 w-1/3 rounded bg-char-line" />
      </div>
    </div>
  );
}

export function ExperienceGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ExperienceCardSkeleton key={i} />
      ))}
    </div>
  );
}
