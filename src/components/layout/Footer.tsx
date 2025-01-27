import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container-custom py-12 animate-fade-in">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold gradient-text">About Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold gradient-cool">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold gradient-warm">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link 
                  href="/returns"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright"
                >
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold gradient-text">Follow Us</h3>
            <div className="space-y-2">
              <a 
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright block"
              >
                Twitter
              </a>
              <a 
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hover-bright block"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 