'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useSession } from 'next-auth/react';

export function CheckoutButton() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { items } = useCart();
  const { data: session } = useSession();

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Cart is empty',
        description: 'Please add items to your cart before checking out.',
      });
      return;
    }

    try {
      setLoading(true);

      // Validate items have required fields
      const validItems = items.every(
        (item) => item.id && item.name && item.price && item.quantity > 0
      );

      if (!validItems) {
        throw new Error('Invalid items in cart');
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          userId: session?.user?.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (!data.url) {
        throw new Error('No checkout URL returned');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        variant: 'destructive',
        title: 'Checkout Error',
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={handleCheckout}
      disabled={loading || items.length === 0}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Checkout
        </>
      )}
    </Button>
  );
} 