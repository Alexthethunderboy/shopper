'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types';

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const isInWishlist = get().items.some((item) => item.id === product.id);
        if (!isInWishlist) {
          set((state) => ({ items: [...state.items, product] }));
        }
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      clearWishlist: () => set({ items: [] }),
      isInWishlist: (productId) =>
        get().items.some((item) => item.id === productId),
    }),
    {
      name: 'wishlist-storage',
    }
  )
); 