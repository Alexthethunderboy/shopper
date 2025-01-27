'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button, Card, CardContent, CardFooter, QuickView } from '@/components/ui';
import { Product } from '@/types';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/use-cart';
import { WishlistButton } from './wishlist-button';
import { cn, formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  className?: string;
}

export function ProductCard({ product, featured = false, className }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    
    try {
      addItem({ ...product, quantity: 1 });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isLiked ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <Card className={cn('group relative overflow-hidden', className)}>
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <WishlistButton product={product} />
        <QuickView product={product} />
      </div>

      {/* Image Section */}
      <Link href={`/product/${product.id}`} className="relative block">
        <div className={`relative overflow-hidden ${featured ? 'aspect-[4/3]' : 'aspect-square'}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={featured}
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={featured 
              ? "(min-width: 1536px) 33vw, (min-width: 1280px) 40vw, (min-width: 768px) 50vw, 90vw"
              : "(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* Add to Cart Button - Appears on Hover */}
      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            className={`w-full dark:bg-white dark:text-black bg-black text-white hover:bg-black/90 dark:hover:bg-white/90 shadow-lg ${
              featured ? 'text-base py-4' : ''
            }`}
            onClick={handleAddToCart}
            disabled={isLoading}
            size={featured ? "lg" : "default"}
          >
            <ShoppingCart className={`mr-2 ${featured ? 'h-5 w-5' : 'h-4 w-4'} ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </Button>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className={`space-y-3 ${featured ? 'p-5' : 'p-4'}`}>
        {/* Category */}
        <div className="flex items-center justify-between">
          <motion.span 
            className={`inline-flex rounded-full bg-primary/10 px-3 py-1 text-primary ${
              featured ? 'text-sm' : 'text-xs'
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {product.category}
          </motion.span>
          <motion.p 
            className={`font-semibold gradient-text ${featured ? 'text-xl' : 'text-sm'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ${product.price.toFixed(2)}
          </motion.p>
        </div>

        {/* Product Name */}
        <Link 
          href={`/product/${product.id}`}
          className="block group-hover:text-primary transition-colors"
        >
          <h3 className={`font-medium leading-tight tracking-tight gradient-warm line-clamp-2
            ${featured ? 'text-lg' : 'text-sm'}`}
          >
            {product.name}
          </h3>
        </Link>
      </div>
    </Card>
  );
} 