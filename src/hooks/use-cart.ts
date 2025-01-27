'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartProduct } from '@/types';

interface CartStore {
  items: CartProduct[];
  addItem: (product: CartProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);

        if (existingItem) {
          set({
            items: currentItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...currentItems, product] });
        }
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      get totalItems() {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      get subtotal() {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
); 