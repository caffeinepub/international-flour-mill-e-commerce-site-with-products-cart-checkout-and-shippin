import { Link } from '@tanstack/react-router';
import { ArrowRight, Package, Globe, Shield } from 'lucide-react';
import { COPY } from '../constants/copy';
import { InternationalShippingCallout } from '../components/shipping/InternationalShippingCallout';
import { ShippingCountriesList } from '../components/shipping/ShippingCountriesList';
import { ResponsiveImage } from '../components/media/ResponsiveImage';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Authentic Kerala Spices & Traditional Sweets & Snacks
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Premium quality coconut oil, spice powders (chilli, turmeric, coriander), other masala & spice powders, and traditional sweets exported worldwide from our heritage flour mill.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  {COPY.cta.orderNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                >
                  Learn Our Story
                </Link>
              </div>
              <div className="pt-4">
                <InternationalShippingCallout />
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-soft">
              <ResponsiveImage
                src="/assets/generated/hero-spice-kerala.dim_1600x900.png"
                alt="Kerala spices and traditional products"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              Handpicked ingredients processed with traditional methods for authentic taste and aroma.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Worldwide Shipping</h3>
            <p className="text-sm text-muted-foreground">
              We deliver to Germany, USA, UK, Dubai, and Malta with secure international shipping.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">Heritage & Trust</h3>
            <p className="text-sm text-muted-foreground">
              Traditional Kerala flour mill bringing you authentic products with generations of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Countries Section */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <ShippingCountriesList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-y">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Authentic Kerala Flavors
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our selection of coconut oil, spice powders (chilli, turmeric, coriander), other masala & spice powders, and traditional sweets.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
