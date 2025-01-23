'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { type Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-card rounded-xl overflow-hidden border card-hover"
    >
      <Link href={`/products/${product.id}`} className="block aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold truncate hover:text-primary transition-colors">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg gradient-text">${product.price.toFixed(2)}</p>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Add to Cart</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 