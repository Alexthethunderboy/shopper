'use client';

import { PageContainer } from '@/components/layout/page-container';
import { CategoryContent } from '@/components/category/category-content';
import { products } from '@/data/products';

// Filter men's products
const mensProducts = products.filter(product => product.category === 'Men');

export default function MensFashionPage() {
  return (
    <PageContainer>
      <CategoryContent
        title="Men's Fashion"
        description="Explore our curated collection of men's clothing and accessories."
        products={mensProducts}
      />
    </PageContainer>
  );
} 