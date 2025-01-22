export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  tags: string[];
}

export interface FilterState {
  category?: string;
  priceRange?: [number, number];
  sizes?: string[];
  colors?: string[];
  tags?: string[];
  sort?: 'price-asc' | 'price-desc' | 'newest';
} 