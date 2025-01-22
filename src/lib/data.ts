import { products } from '@/data/products';

export const featuredProducts = products.map(product => ({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
  category: product.category,
  description: product.description
}));

export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return featuredProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
}; 