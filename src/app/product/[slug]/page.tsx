import { notFound } from 'next/navigation'
import ProductDetails from './product-details'
import { Product } from '@/types/product'
import { products } from '@/data/products'

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = products.find(p => p.slug === slug)
    return product ?? null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  if (!params.slug) {
    notFound()
  }

  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
} 