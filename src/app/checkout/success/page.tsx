'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageContainer } from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      router.replace('/cart');
      return;
    }

    const handleSuccess = async () => {
      try {
        // Here you could verify the session with Stripe if needed
        clearCart();
      } catch (error) {
        console.error('Error handling success:', error);
      } finally {
        setLoading(false);
      }
    };

    handleSuccess();
  }, [sessionId, clearCart, router]);

  if (loading) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Processing your order...</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          We appreciate your business! If you have any questions, please email us at
          orders@example.com
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
} 