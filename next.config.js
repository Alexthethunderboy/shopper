/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    // Don't run ESLint during builds (you can still run it manually)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't run type checking during builds (you can still run it manually)
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 