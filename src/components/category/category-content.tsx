'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/product-card';
import { ScrollAnimation } from '@/components/ui';
import { SortDropdown } from '@/components/category/sort-dropdown';
import { FilterSidebar } from '@/components/category/filter-sidebar';
import { ProductGrid } from '@/components/product/product-grid';
import type { Product, FilterState } from '@/types';

interface CategoryContentProps {
  title: string;
  description?: string;
  products: Product[];
}

export function CategoryContent({ title, description, products: initialProducts }: CategoryContentProps) {
  const [sort, setSort] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000] as [number, number],
    sizes: [],
    colors: [],
    tags: [],
  });

  // Apply filters and sorting
  const filteredProducts = initialProducts.filter(product => {
    // Price range filter
    const price = product.price ?? 0;
    const [minPrice, maxPrice] = filters.priceRange;
    if (price < minPrice || price > maxPrice) {
      return false;
    }
    
    // Size filter
    if (filters.sizes.length > 0) {
      if (!product.sizes?.some(size => filters.sizes.includes(size))) {
        return false;
      }
    }
    
    // Color filter
    if (filters.colors.length > 0) {
      if (!product.colors?.some(color => filters.colors.includes(color))) {
        return false;
      }
    }
    
    // Tag filter
    if (filters.tags.length > 0) {
      if (!product.tags?.some(tag => filters.tags.includes(tag))) {
        return false;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return (a.price ?? 0) - (b.price ?? 0);
      case 'price-desc':
        return (b.price ?? 0) - (a.price ?? 0);
      case 'newest':
        return Number(b.id ?? 0) - Number(a.id ?? 0);
      default:
        return 0;
    }
  });

  const availableFilters = {
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue', 'Red', 'Green'],
    tags: ['New', 'Sale', 'Trending'],
    priceRange: [0, 1000] as [number, number],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>

      <div className="lg:grid lg:grid-cols-[240px,1fr] gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            availableFilters={availableFilters}
          />
        </div>

        <div className="space-y-6">
          {/* Mobile Filter and Sort */}
          <div className="flex items-center justify-between lg:justify-end gap-4">
            <div className="lg:hidden">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                availableFilters={availableFilters}
              />
            </div>
            <SortDropdown
              value={sort}
              onValueChange={(value) => setSort(value as typeof sort)}
            />
          </div>

          {/* Product Grid */}
          <ProductGrid products={sortedProducts} />

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold">No products found</h2>
              <p className="text-muted-foreground mt-2">
                Try adjusting your filters or check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 