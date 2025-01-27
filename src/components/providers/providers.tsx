'use client';

import { ThemeProvider } from 'next-themes';
import { CartProvider } from '@/context/cart-context';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from './auth-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
} 