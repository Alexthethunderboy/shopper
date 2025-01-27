'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { Button, Dialog, DialogContent, DialogTrigger } from '@/components/ui';
import { useCart } from '@/hooks/use-cart';
import { type Product } from '@/types';
import { ProductDetails } from '@/app/product/[slug]/product-details';

interface QuickViewProps {
  product: Product;
}

export function QuickView({ product }: QuickViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { addItem } = useCart();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group"
          aria-label="Quick view"
        >
          <Eye className="h-5 w-5 transition-colors group-hover:text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4">
          <div className="aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold">${product.price.toFixed(2)}</p>
              {product.stock !== undefined && (
                <p className="text-sm text-muted-foreground">
                  {product.stock} in stock
                </p>
              )}
            </div>
          </div>
          <Button
            className="w-full"
            onClick={() => {
              addItem({ ...product, quantity: 1 });
              setIsOpen(false);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 