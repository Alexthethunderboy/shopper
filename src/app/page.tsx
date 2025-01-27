import { Hero } from '@/components/sections/hero';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { Categories } from '@/components/sections/categories';
import { Newsletter } from '@/components/sections/newsletter';
import { products, categories } from '@/data/products';
import { PageContainer } from '@/components/layout/page-container';

export default function HomePage() {
  return (
    <PageContainer fullWidth>
      <Hero />
      <div className="container-custom py-16">
        <FeaturedProducts products={products} />
        <Categories categories={categories} />
        <Newsletter />
      </div>
    </PageContainer>
  );
}
