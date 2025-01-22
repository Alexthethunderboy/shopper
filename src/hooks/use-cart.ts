'use client';

import { useCart as useReactCart } from 'react-use-cart';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function useCart() {
  const {
    addItem,
    removeItem,
    updateItemQuantity,
    items,
    totalItems,
    cartTotal,
    emptyCart,
  } = useReactCart();

  return {
    addItem: (product: CartProduct) =>
      addItem({ ...product, price: Number(product.price) }),
    removeItem,
    updateItemQuantity,
    items: items as CartProduct[],
    totalItems,
    cartTotal,
    emptyCart,
  };
} 