'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store/cart';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function CheckoutSuccessPage() {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="flex-1">
      <div className="container py-32">
        <ScrollAnimation className="max-w-md mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
          <p className="text-muted-foreground mb-8">
            We'll send you a confirmation email with your order details shortly.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/account/orders">View Orders</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </main>
  );
} 