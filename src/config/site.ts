export const siteConfig = {
  name: 'Shopper',
  description: 'Your premium fashion destination.',
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: 'https://your-domain.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Shop',
      href: '/products',
    },
    {
      title: 'Categories',
      href: '/categories',
    },
    {
      title: 'About',
      href: '/about',
    },
  ],
}; 