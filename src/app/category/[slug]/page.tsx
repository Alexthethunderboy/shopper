import type { Metadata } from "next"
import { CategoryPage } from "./category-page"

// Category mapping for metadata
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

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<any>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categoryMapping[slug]

  return {
    title: `${category || "Category"} | Shopper`,
    description: descriptions[slug] || "Explore our collection of products.",
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  return <CategoryPage slug={slug} />
}

export function generateStaticParams() {
  return Object.keys(categoryMapping).map((slug) => ({
    slug,
  }))
}

