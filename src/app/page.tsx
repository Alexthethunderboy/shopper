'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';
import { ProductSkeleton } from '@/components/ui/product-skeleton';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { gradients } from '@/lib/colors';
import { Carousel } from '@/components/ui/carousel';
import { FeaturedSection } from '@/components/sections/featured-section';
import { products, categories } from '@/data/products';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const heroImages = [
  { 
    src: '/images/hero.jpg', 
    alt: 'Hero image 1',
    className: 'object-cover object-center' 
  },
  { 
    src: '/images/hero-2.jpg', 
    alt: 'Hero image 2',
    className: 'object-cover object-center' 
  },
  { 
    src: '/images/hero-3.jpg', 
    alt: 'Hero image 3',
    className: 'object-cover object-center' 
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        {/* Hero content */}
      </section>

      {/* Featured Products */}
      <FeaturedSection products={featuredProducts} />

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-secondary/10">
        {/* Newsletter content */}
      </section>
    </main>
  );
}
