"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { motion } from "framer-motion"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // The rest of the component remains unchanged
  return (
    <main className="flex-1">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <motion.h1
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {product.name}
              </motion.h1>
              <motion.p
                className="text-2xl font-bold text-primary mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {formatPrice(product.price)}
              </motion.p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <Button key={size} variant="outline" className="w-12 h-12">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">1</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-8">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="prose prose-sm mt-8">
              <h2 className="text-lg font-semibold">Product Description</h2>
              <p className="text-muted-foreground">{product.description || "No description available."}</p>

              <h2 className="text-lg font-semibold mt-4">Product Details</h2>
              <ul className="list-disc pl-4 text-muted-foreground">
                <li>High-quality materials</li>
                <li>Durable construction</li>
                <li>Easy to care for</li>
                <li>Versatile styling options</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

