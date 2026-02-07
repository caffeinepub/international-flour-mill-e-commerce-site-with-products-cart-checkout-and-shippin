import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { COPY } from '../../constants/copy';
import { PublishShareDialog } from '../publish/PublishShareDialog';
import { Button } from '@/components/ui/button';

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { path: '/', label: COPY.nav.home },
    { path: '/about', label: COPY.nav.about },
    { path: '/products', label: COPY.nav.products },
    { path: '/contact', label: COPY.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/assets/generated/logo-mark.dim_512x512.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl font-semibold text-foreground">
            Kerala Spice Mill
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <PublishShareDialog />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                  currentPath === link.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <PublishShareDialog
                trigger={
                  <Button variant="outline" size="sm" className="w-full">
                    {COPY.nav.publish}
                  </Button>
                }
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
