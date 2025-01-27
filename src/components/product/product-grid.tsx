import { ProductCard } from './product-card';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-12 animate-fade-in">
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight mb-8 gradient-text">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
} 