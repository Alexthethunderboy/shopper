export function ProductCardSkeleton() {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border h-[400px]">
      <div className="aspect-square bg-muted animate-pulse" />
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
          <div className="h-5 w-48 bg-muted animate-pulse rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 bg-muted animate-pulse rounded" />
          <div className="h-9 w-24 bg-muted animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
} 