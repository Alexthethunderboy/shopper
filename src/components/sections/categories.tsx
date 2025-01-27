'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MotionDiv, staggerContainer } from '../animations/motion-div';
import { Category } from '@/types';

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16">
      <motion.div 
        className="container-custom"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <MotionDiv className="text-center mb-12 space-y-4" animation="fadeIn">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl gradient-cool">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collections and find your perfect style in every category.
          </p>
        </MotionDiv>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <MotionDiv
              key={category.id}
              animation="scaleIn"
              delay={index * 0.1}
              className="flex"
            >
              <Link 
                href={`/category/${category.id}`}
                className="group relative w-full overflow-hidden rounded-lg"
              >
                <motion.div
                  className="relative aspect-[4/3] w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.itemCount} items
                    </p>
                  </div>

                  <div className="absolute inset-0 ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/20" />
                </motion.div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 