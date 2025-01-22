export const imageConfig = {
  domains: ['localhost', 'res.cloudinary.com'],
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/your-cloud-name/**',
    },
  ],
}; 