import { motion, HTMLMotionProps } from 'framer-motion';

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideIn" | "scaleIn";
  delay?: number;
}

export function MotionDiv({ 
  children, 
  animation = "fadeIn", 
  delay = 0,
  ...props 
}: MotionDivProps) {
  const animations = {
    fadeIn,
    slideIn,
    scaleIn,
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations[animation]}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut" 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
} 