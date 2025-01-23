'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CartIcon() {
  const totalItems = useCart((state) => state.totalItems);

  return (
    <Button variant="ghost" size="icon" asChild className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </Button>
  );
} 