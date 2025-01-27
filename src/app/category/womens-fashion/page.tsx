'use client';

import { PageContainer } from '@/components/layout/page-container';
import { CategoryContent } from '@/components/category/category-content';
import { products } from '@/data/products';

// Filter women's products
const womensProducts = products.filter(product => product.category === 'Women');

export default function WomensFashionPage() {
  return (
    <PageContainer>
      <CategoryContent
        title="Women's Fashion"
        description="Discover our latest collection of women's clothing and accessories."
        products={womensProducts}
      />
    </PageContainer>
  );
} 