"use client"

import { products } from "@/data/products"
import { CategoryContent } from '@/components/category/category-content'
import { PageContainer } from "@/components/layout/page-container"
import { notFound } from "next/navigation"

// Category mapping
const categoryMapping: Record<string, string> = {
  "womens-fashion": "Women",
  "mens-fashion": "Men",
  accessories: "Accessories",
}

const descriptions: Record<string, string> = {
  "womens-fashion": "Discover our latest collection of women's clothing and accessories.",
  "mens-fashion": "Explore our curated collection of men's clothing and accessories.",
  accessories: "Complete your look with our stylish collection of accessories.",
}

interface CategoryPageProps {
  slug: string
}

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = categoryMapping[slug]

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((product) => product.category === category)

  return (
    <PageContainer>
      <CategoryContent title={category} description={descriptions[slug]} products={categoryProducts} />
    </PageContainer>
  )
}

