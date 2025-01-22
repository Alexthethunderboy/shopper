'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FilterSidebar } from '@/components/category/filter-sidebar';
import { SortDropdown } from '@/components/category/sort-dropdown';
import { ProductCard } from '@/components/ui/ProductCard';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import type { Product, FilterState } from '@/lib/types/product';

// This would come from your API/database
const mockProducts: Product[] = [
  // ... your product data
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    category: params.slug,
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    tags: [],
    sort: 'newest',
  });

  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    // Apply filters and sorting
    let result = mockProducts.filter((product) => {
      if (filters.category && product.category !== filters.category) return false;
      if (
        filters.priceRange &&
        (product.price < filters.priceRange[0] ||
          product.price > filters.priceRange[1])
      )
        return false;
      if (
        filters.sizes?.length &&
        !filters.sizes.some((size) => product.sizes.includes(size))
      )
        return false;
      if (
        filters.colors?.length &&
        !filters.colors.some((color) => product.colors.includes(color))
      )
        return false;
      if (
        filters.tags?.length &&
        !filters.tags.some((tag) => product.tags.includes(tag))
      )
        return false;
      return true;
    });

    // Apply sorting
    if (filters.sort) {
      result = [...result].sort((a, b) => {
        switch (filters.sort) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'newest':
            return b.id - a.id;
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(result);
  }, [filters, params.slug]);

  return (
    <main className="flex-1">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold capitalize">
            {params.slug.replace('-', ' ')}
          </h1>
          <div className="flex items-center gap-4">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              availableFilters={{
                sizes: ['XS', 'S', 'M', 'L', 'XL'],
                colors: ['Black', 'White', 'Blue', 'Red'],
                tags: ['New', 'Sale', 'Trending'],
                priceRange: [0, 1000],
              }}
            />
            <SortDropdown
              value={filters.sort || 'newest'}
              onValueChange={(value) =>
                setFilters({ ...filters, sort: value as any })
              }
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollAnimation>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 