interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

import { products } from '@/data/products';

export const featuredProducts: Product[] = products.map(product => ({
  id: Number(product.id), // Ensure id is treated as a number
  name: product.name,
  price: product.price,
  image: product.image,
  category: product.category,
  description: product.description
}));

export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return featuredProducts.filter((product: Product) => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};
