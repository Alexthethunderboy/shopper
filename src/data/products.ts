import { Product, Category } from '@/types';
import { generateSlug } from '@/lib/utils';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    slug: generateSlug('Classic White T-Shirt'),
    price: 29.99,
    image: '/images/products/shirt-1.jpg',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    tags: ['Basics', 'Trending'],
    description: 'A timeless classic white t-shirt made from premium cotton.'
  },
  {
    id: '2',
    name: 'Leather Crossbody Bag',
    slug: generateSlug('Leather Crossbody Bag'),
    price: 89.99,
    image: '/images/products/bag-1.jpg',
    category: 'Accessories',
    colors: ['Black', 'Brown', 'Tan'],
    tags: ['New', 'Trending'],
    description: 'Elegant leather crossbody bag with adjustable strap.'
  },
  {
    id: '3',
    name: 'Denim Jacket',
    slug: generateSlug('Denim Jacket'),
    price: 79.99,
    image: '/images/products/jacket-1.jpg',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    tags: ['Sale', 'Trending'],
    description: 'Classic denim jacket with modern details.'
  },
  {
    id: '4',
    name: 'Running Sneakers',
    slug: generateSlug('Running Sneakers'),
    price: 119.99,
    image: '/images/products/sneakers-1.jpg',
    category: 'Men',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Gray'],
    tags: ['New', 'Sport'],
    description: 'Comfortable running sneakers with advanced cushioning.'
  },
  {
    id: '5',
    name: 'Summer Dress',
    slug: generateSlug('Summer Dress'),
    price: 59.99,
    image: '/images/products/dress-1.jpg',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blue', 'Pink', 'Yellow'],
    tags: ['Summer', 'Sale'],
    description: 'Light and breezy summer dress perfect for warm days.'
  },
  {
    id: '6',
    name: 'Sunglasses',
    slug: generateSlug('Sunglasses'),
    price: 149.99,
    image: '/images/products/sunglasses-1.jpg',
    category: 'Accessories',
    colors: ['Black', 'Gold'],
    tags: ['Luxury', 'New'],
    description: 'Designer sunglasses with UV protection.'
  },
  {
    id: '7',
    name: 'Leather Wallet',
    slug: generateSlug('Leather Wallet'),
    price: 49.99,
    image: '/images/products/wallet-1.jpg',
    category: 'Accessories',
    colors: ['Brown', 'Black'],
    tags: ['Basics'],
    description: 'Genuine leather wallet with multiple card slots.'
  },
  {
    id: '8',
    name: 'Smart Watch',
    slug: generateSlug('Smart Watch'),
    price: 299.99,
    image: '/images/products/watch-1.jpg',
    category: 'Accessories',
    colors: ['Black', 'Silver'],
    tags: ['Tech', 'Trending'],
    description: 'Smart watch with fitness tracking and notifications.'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Women',
    image: '/images/categories/women.jpg',
    itemCount: products.filter(p => p.category === 'Women').length
  },
  {
    id: '2',
    name: 'Men',
    image: '/images/categories/men.jpg',
    itemCount: products.filter(p => p.category === 'Men').length
  },
  {
    id: '3',
    name: 'Accessories',
    image: '/images/categories/accessories.jpg',
    itemCount: products.filter(p => p.category === 'Accessories').length
  }
]; 