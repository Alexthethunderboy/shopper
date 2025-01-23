/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
      "@components": path.join(__dirname, "src/components"),
      "@lib": path.join(__dirname, "src/lib"),
    };
    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(__dirname, "src"),
    ];
    return config;
  },
};

module.exports = nextConfig

