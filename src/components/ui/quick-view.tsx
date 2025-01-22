'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from './modal';
import { Button } from './button';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store/cart';

interface QuickViewProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export function QuickView({ product }: QuickViewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const addToCart = useCart((state) => state.addItem);

  return (
    <>
      <Button 
        variant="secondary" 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        Quick View
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Quick View"
      >
        <div className="grid gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-lg font-bold text-primary mt-2">
              {formatPrice(product.price)}
            </p>
          </div>
          <Button 
            className="w-full"
            onClick={() => {
              addToCart(product);
              setIsOpen(false);
            }}
          >
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </Modal>
    </>
  );
} 