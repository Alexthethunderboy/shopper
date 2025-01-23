'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { type Product } from '@/types/product';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className={className}>
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1.5">
              <Badge variant="secondary">{product.category}</Badge>
              <h3 className="font-medium leading-none">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
} 