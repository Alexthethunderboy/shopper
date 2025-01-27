import Link from "next/link"
import { Button } from "@/components/ui"

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-2xl font-bold">Product Not Found</h2>
      <p className="mb-8 text-muted-foreground">The product you are looking for does not exist.</p>
      <Button asChild>
        <Link href="/products">View All Products</Link>
      </Button>
    </div>
  )
}

