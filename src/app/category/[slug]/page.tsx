import { Suspense } from 'react';
import { Metadata } from 'next';
import CategoryContent from './category-content';
import type { Product } from '@/lib/types/product';

// This would come from your API/database
const mockProducts: Product[] = [
  // ... your product data
];

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug.replace('-', ' ')} | Your Store Name`,
    description: `Browse our collection of ${params.slug.replace('-', ' ')} products.`,
  };
}

export default function CategoryPage(props: Props) {
  const { params, searchParams } = props;

  return (
    <main className="flex-1">
      <div className="container py-8">
        <h1 className="text-3xl font-bold capitalize mb-8">
          {params.slug.replace('-', ' ')}
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryContent slug={params.slug} products={mockProducts} />
        </Suspense>
      </div>
    </main>
  );
} 