'use client'

import { motion } from 'framer-motion';
import { ProductCard } from '../product/product-card';
import { MotionDiv, staggerContainer } from '../animations/motion-div';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-24 bg-card">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <MotionDiv className="text-center mb-16 space-y-4" animation="fadeIn">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of trending items and must-have pieces.
          </p>
        </MotionDiv>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 mb-16">
          {products.map((product, index) => (
            <MotionDiv
              key={product.id}
              animation="scaleIn"
              delay={index * 0.1}
              className="w-full"
            >
              <ProductCard product={product} featured />
            </MotionDiv>
          ))}
        </div>

        {/* View All Button */}
        <MotionDiv 
          className="text-center"
          animation="fadeIn"
          delay={0.5}
        >
          <Button 
            asChild
            className="btn-primary px-12 py-6 text-lg font-medium hover-lift shadow-lg"
            size="lg"
          >
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </MotionDiv>
      </motion.div>
    </section>
  );
} 