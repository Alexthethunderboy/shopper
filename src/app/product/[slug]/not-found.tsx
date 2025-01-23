import Link from 'next/link'
import Button from '@/components/ui/button'

export default function ProductNotFound() {
  return (
    <main className="flex-1">
      <div className="container py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Button asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </main>
  )
} 