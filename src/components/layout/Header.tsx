'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/search/search-bar';
import { UserMenu } from './user-menu';
import { Cart } from '@/components/cart';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navigation = [
  { name: 'Women', href: '/category/womens-fashion' },
  { name: 'Men', href: '/category/mens-fashion' },
  { name: 'Accessories', href: '/category/accessories' },
  { name: 'Sale', href: '/sale' },
  { name: 'New Arrivals', href: '/category/new-arrivals' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">SHOPPER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <ThemeToggle />
            <UserMenu />
            <Cart />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              size="icon"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
