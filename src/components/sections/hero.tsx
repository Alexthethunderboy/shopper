'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Carousel } from '@/components/ui';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    src: '/images/hero.jpg',
    alt: 'Modern fashion collection',
    className: 'object-cover object-[50%_30%]'
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Summer collection',
    className: 'object-cover object-[50%_30%]'
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Accessories collection',
    className: 'object-cover object-[50%_30%]'
  }
];

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-muted animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <Carousel 
          images={heroImages}
          className="h-full"
          autoplayInterval={6000}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-background/25 z-30">
        <div className="container-custom relative flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-text">Discover Your Style</span>
                <br />
                <span className="gradient-warm">Shop the Latest Trends</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore our curated collection of fashion and accessories.
                Find your perfect look with exclusive designs.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                asChild
                className="btn-primary px-8 py-6 text-lg hover-lift"
                size="lg"
              >
                <Link href="/category/womens-fashion">
                  Shop Women's Fashion
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-6 text-lg hover-lift"
                size="lg"
              >
                <Link href="/category/mens-fashion">
                  Shop Men's Fashion
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
} 