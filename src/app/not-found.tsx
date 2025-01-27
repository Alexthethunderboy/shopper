import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] flex-col items-center justify-center text-center animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
          404
        </h1>
        <h2 className="text-2xl font-semibold tracking-tight gradient-warm">Page not found</h2>
        <p className="mx-auto max-w-[500px] text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button asChild className="btn-primary hover-lift">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 