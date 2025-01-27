'use client';

import { useWishlist } from '@/hooks/use-wishlist';
import { PageContainer } from '@/components/layout/page-container';
import { ProductCard } from '@/components/product/product-card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();

  return (
    <PageContainer>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            <p className="text-muted-foreground mt-1">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
          {items.length > 0 && (
            <Button
              variant="outline"
              onClick={clearWishlist}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              Clear Wishlist
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-4">
              Add items to your wishlist to save them for later.
            </p>
            <Button asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} featured={false} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
} 