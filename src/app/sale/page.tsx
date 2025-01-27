'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product/product-card';
import { ScrollAnimation } from '@/components/ui';
import { SortDropdown } from '@/components/category/sort-dropdown';
import { PageContainer } from '@/components/layout/page-container';
import { useState } from 'react';
import { type Product } from '@/types';
import { products } from '@/data/products';

// Filter products that are on sale (for demo, we'll consider items with price < 50 as on sale)
const saleProducts = products.filter(product => product.price < 50);

export default function SalePage() {
  const [sort, setSort] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  const sortedProducts = [...saleProducts].sort((a, b) => {
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
          <h1 className="text-4xl font-bold gradient-text">Sale</h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing deals on our best-selling items.
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
            <h2 className="text-xl font-semibold">No sale items available</h2>
            <p className="text-muted-foreground mt-2">
              Check back later for new deals and discounts.
            </p>
          </div>
        )}
      </motion.div>
    </PageContainer>
  );
} 