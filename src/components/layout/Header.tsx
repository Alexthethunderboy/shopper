'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import Button from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SearchBar } from '@/components/search/search-bar';
import { UserMenu } from './user-menu';
import { Cart } from '@/components/cart';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navigation = [
  { name: 'Women', href: '/category/womens-fashion' },
  { name: 'Men', href: '/category/mens-fashion' },
  { name: 'Accessories', href: '/category/accessories' },
  { name: 'Sale', href: '/sale' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left section: Mobile menu and Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <nav className="mt-8 flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link 
              href="/" 
              className="text-xl font-bold hover:text-primary transition-colors"
            >
              Shopper
            </Link>
          </div>

          {/* Center section: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right section: Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:block flex-1 min-w-[200px] max-w-xs">
              <SearchBar />
            </div>
            <ThemeToggle />
            <Cart />
            <UserMenu />
            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden"
              onClick={() => {/* Open search modal */}}
            >
              <span className="sr-only">Search</span>
              <SearchBar />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 