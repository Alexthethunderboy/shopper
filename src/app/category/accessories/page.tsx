'use client';

import { PageContainer } from '@/components/layout/page-container';
import { CategoryContent } from '@/components/category/category-content';
import { products } from '@/data/products';

// Filter accessories products
const accessoryProducts = products.filter(product => product.category === 'Accessories');

export default function AccessoriesPage() {
  return (
    <PageContainer>
      <CategoryContent
        title="Accessories"
        description="Complete your look with our stylish collection of accessories."
        products={accessoryProducts}
      />
    </PageContainer>
  );
} 