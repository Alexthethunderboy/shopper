import { Product } from '@/types';
import { ProductCard } from './product-card';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  // Ensure we only use up to 6 products
  const featuredProducts = products.slice(0, 6);
  
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        {/* First large product */}
        <div className="col-span-12 lg:col-span-8">
          {featuredProducts[0] && (
            <ProductCard product={featuredProducts[0]} featured={true} />
          )}
        </div>
        
        {/* Second large product */}
        <div className="col-span-12 lg:col-span-4">
          {featuredProducts[1] && (
            <ProductCard product={featuredProducts[1]} featured={true} />
          )}
        </div>
        
        {/* Remaining 4 smaller products */}
        {featuredProducts.slice(2, 6).map((product) => (
          <div key={product.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
} 