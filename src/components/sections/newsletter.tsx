'use client'

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '../animations/motion-div';

export function Newsletter() {
  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl" />
          
          <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-20 rounded-3xl">
            <MotionDiv 
              className="max-w-2xl mx-auto text-center space-y-4"
              animation="fadeIn"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
                Stay in the Loop
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for exclusive offers, new arrivals, and fashion tips.
              </p>
            </MotionDiv>

            <motion.form 
              className="mt-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full sm:w-auto h-12 px-8 btn-primary">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </motion.form>

            <MotionDiv 
              className="mt-6 text-center text-sm text-muted-foreground"
              animation="fadeIn"
              delay={0.4}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </MotionDiv>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
} 