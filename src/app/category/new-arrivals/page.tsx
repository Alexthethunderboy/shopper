'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/product-card';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { SortDropdown } from '@/components/category/sort-dropdown';
import { PageContainer } from '@/components/layout/page-container';
import { useState } from 'react';
import { products } from '@/data/products';

// Get the latest products (for demo, we'll take the last 8 products)
const newArrivals = products.slice(-8);

export default function NewArrivalsPage() {
  const [sort, setSort] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  const sortedProducts = [...newArrivals].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return Number(b.id) - Number(a.id);
      default:
        return 0;
    }
  });

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold gradient-text">New Arrivals</h1>
          <p className="text-lg text-muted-foreground">
            Explore our latest collection of fresh styles and trends.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-end">
          <SortDropdown
            value={sort}
            onValueChange={(value) => setSort(value as any)}
          />
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sortedProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollAnimation>
          ))}
        </motion.div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold">No new arrivals yet</h2>
            <p className="text-muted-foreground mt-2">
              Check back soon for our latest products.
            </p>
          </div>
        )}
      </motion.div>
    </PageContainer>
  );
} 