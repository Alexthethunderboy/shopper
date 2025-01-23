export interface Product {
  id: string | number;
  name: string;
  slug: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
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

export type CartProduct = Product & {
  quantity: number;
}; 