'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function PageContainer({ children, className, fullWidth = false }: PageContainerProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            fullWidth ? "w-full" : "container-custom py-16",
            className
          )}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
} 