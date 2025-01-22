'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { formatPrice } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { colors, gradients } from '@/lib/colors'
import { QuickView } from './quick-view';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/product/${product.slug}`}>
        <Card 
          className="group h-full overflow-hidden relative"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  250px circle at ${mouseX}px ${mouseY}px,
                  ${colors.brand}10,
                  transparent 80%
                )
              `,
            }}
          />
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: gradients.brand + '80',
                }}
              >
                <div className="space-y-2">
                  <motion.span 
                    className="block text-white font-medium text-center mb-2"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Details
                  </motion.span>
                  <QuickView product={product} />
                </div>
              </motion.div>
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {formatPrice(product.price)}
              </p>
            </motion.div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
} 