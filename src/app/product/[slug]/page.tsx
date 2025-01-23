import { notFound } from 'next/navigation'
import ProductDetails from './product-details'
import { Product } from '@/types/product'

// This would come from your database
async function getProduct(slug: string): Promise<Product | null> {
  const product = featuredProducts.find(p => p.slug === slug)
  if (!product) return null
  return product
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductDetails product={product} />
}

// Temporary mock data - Move to a separate file later
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    slug: "classic-white-sneakers",
    price: 89.99,
    image: "/product-sneakers.jpg",
    description: "Comfortable and stylish sneakers perfect for everyday wear."
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    slug: "leather-crossbody-bag",
    price: 129.99,
    image: "/product-bag.jpg",
    description: "Elegant leather bag with adjustable strap and multiple compartments."
  },
  {
    id: 3,
    name: "Denim Jacket",
    slug: "denim-jacket",
    price: 149.99,
    image: "/product-jacket.jpg",
    description: "Classic denim jacket with a modern fit and durable construction."
  },
  {
    id: 4,
    name: "Summer Dress",
    slug: "summer-dress",
    price: 79.99,
    image: "/product-dress.jpg",
    description: "Light and breezy summer dress perfect for warm days."
  },
] 