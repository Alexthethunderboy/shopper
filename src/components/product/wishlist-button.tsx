'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  product: Product;
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
}

export function WishlistButton({
  product,
  className,
  variant = 'ghost',
}: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeItem(product.id);
      toast({
        title: 'Removed from wishlist',
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      addItem(product);
      toast({
        title: 'Added to wishlist',
        description: `${product.name} has been added to your wishlist`,
      });
    }
  };

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn('group', className)}
      onClick={toggleWishlist}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        className={cn(
          'h-5 w-5 transition-colors',
          isWishlisted
            ? 'fill-red-500 text-red-500'
            : 'fill-none group-hover:text-red-500'
        )}
      />
    </Button>
  );
} 