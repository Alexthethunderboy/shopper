import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Sneakers',
    slug: 'classic-white-sneakers',
    price: 89.99,
    image: '/images/products/sneakers-1.jpg',
    category: 'Men',
    description: 'Minimalist design meets maximum comfort in these versatile white sneakers.'
  },
  {
    id: '2',
    name: 'Leather Crossbody Bag',
    slug: 'leather-crossbody-bag',
    price: 129.99,
    image: '/images/products/bag-1.jpg',
    category: 'Accessories',
    description: 'Elegant leather crossbody bag with adjustable strap and multiple compartments.'
  },
  {
    id: '3',
    name: 'Floral Summer Dress',
    slug: 'floral-summer-dress',
    price: 79.99,
    image: '/images/products/dress-1.jpg',
    category: 'Women',
    description: 'Light and breezy floral dress perfect for summer days.'
  },
  {
    id: '4',
    name: 'Denim Jacket',
    slug: 'denim-jacket',
    price: 119.99,
    image: '/images/products/jacket-1.jpg',
    category: 'Men',
    description: 'Classic denim jacket with a modern fit and vintage wash.'
  },
  {
    id: '5',
    name: 'Gold Hoop Earrings',
    slug: 'gold-hoop-earrings',
    price: 49.99,
    image: '/images/products/earrings-1.jpg',
    category: 'Accessories',
    description: 'Timeless gold-plated hoop earrings with secure closure.'
  },
  {
    id: '6',
    name: 'Silk Blouse',
    slug: 'silk-blouse',
    price: 89.99,
    image: '/images/products/blouse-1.jpg',
    category: 'Women',
    description: 'Luxurious silk blouse with elegant drape and classic collar.'
  },
  {
    id: '7',
    name: 'Leather Wallet',
    slug: 'leather-wallet',
    price: 59.99,
    image: '/images/products/wallet-1.jpg',
    category: 'Accessories',
    description: 'Genuine leather wallet with RFID protection and multiple card slots.'
  },
  {
    id: '8',
    name: 'Casual Linen Shirt',
    slug: 'casual-linen-shirt',
    price: 69.99,
    image: '/images/products/shirt-1.jpg',
    category: 'Men',
    description: 'Breathable linen shirt perfect for casual occasions.'
  }
];

export const categories = [
  {
    name: 'Women',
    image: '/images/categories/women.jpg',
    href: '/category/women',
    description: 'Discover the latest trends in women\'s fashion'
  },
  {
    name: 'Men',
    image: '/images/categories/men.jpg',
    href: '/category/men',
    description: 'Explore our collection of men\'s clothing'
  },
  {
    name: 'Accessories',
    image: '/images/categories/accessories.jpg',
    href: '/category/accessories',
    description: 'Complete your look with our premium accessories'
  }
]; 