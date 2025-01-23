'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Carousel } from '@/components/ui/carousel';
import { FeaturedSection } from '@/components/sections/featured-section';
import { products } from '@/data/products';

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
  const featuredProducts = products;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-1">
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Carousel 
            images={heroImages} 
            className="w-full h-full"
            imageClassName="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/30" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold gradient-text">
                Discover Your Style
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                Shop the latest trends in fashion with our curated collection
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90" 
                asChild
              >
                <Link href="/products">Shop Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedSection products={featuredProducts} />
    </main>
  );
}
