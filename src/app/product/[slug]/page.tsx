import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductDetails from "./product-details"
import type { Product } from "@/types"
import { products } from "@/data/products"

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = products.find((p) => p.slug === slug)
    return product ?? null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    return {
      title: "Product Not Found | Shopper",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | Shopper`,
    description: product.description || `Details for ${product.name}`,
  }
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

