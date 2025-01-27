'use client';

import { Button, ScrollArea, Separator } from '@/components/ui';
import { PageContainer } from '@/components/layout/page-container';
import { CheckoutButton } from '@/components/cart/checkout-button';
import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">
            Review and update your cart before checking out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
          {/* Cart Items */}
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-4 pr-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4">
                  <div className="aspect-square h-24 relative rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Order Summary */}
          <div className="rounded-lg border p-6 space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <Separator />
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-muted-foreground">Calculated at checkout</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 