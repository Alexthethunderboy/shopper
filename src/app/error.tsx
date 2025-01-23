'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/button';

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
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-2 text-muted-foreground">
        {error.message || 'An error occurred while processing your request.'}
      </p>
      <Button
        variant="outline"
        onClick={() => reset()}
        className="mt-4"
      >
        Try again
      </Button>
    </div>
  );
} 