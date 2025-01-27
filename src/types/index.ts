export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  tags?: string[];
  variants?: ProductVariant[];
  stock?: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  stock?: number;
}

export interface FilterState {
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  tags: string[];
  sort?: 'price-asc' | 'price-desc' | 'newest';
}

export type CartProduct = Product & {
  quantity: number;
};

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
} 