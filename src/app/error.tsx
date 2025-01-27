'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-bold">Something went wrong!</h2>
      <p className="mb-8 text-muted-foreground">
        An error occurred while processing your request.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
} 