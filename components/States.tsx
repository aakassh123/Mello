import { SearchX, TriangleAlert } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-char-line bg-char-soft py-20 text-center">
      <SearchX className="h-8 w-8 text-ivory/40" />
      <p className="font-display text-2xl text-ivory">No experiences found</p>
      <p className="text-sm text-ivory/50">Try changing your filters.</p>
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-char-line bg-char-soft py-20 text-center">
      <TriangleAlert className="h-8 w-8 text-clay" />
      <p className="font-display text-2xl text-ivory">Something went wrong</p>
      <p className="text-sm text-ivory/50">Please try again.</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 rounded-full border border-ivory/30 px-5 py-2 text-sm text-ivory hover:border-ivory/70"
        >
          Retry
        </button>
      )}
    </div>
  );
}
