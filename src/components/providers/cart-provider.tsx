'use client';

import { CartProvider as USCProvider } from 'react-use-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <USCProvider>{children}</USCProvider>;
} 