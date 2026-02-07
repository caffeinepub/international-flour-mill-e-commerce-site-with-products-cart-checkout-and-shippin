import { useProducts } from '../hooks/useQueries';
import { ProductCard } from '../components/products/ProductCard';
import { InternationalShippingCallout } from '../components/shipping/InternationalShippingCallout';
import { Loader2 } from 'lucide-react';

export function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  // Additional defensive filter at UI layer
  const displayProducts = products?.filter(
    (product) => product.name !== 'Virgin Coconut Oil'
  );

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Discover our range of premium Kerala products: Coconut oil – Spice powders (chilli, turmeric, coriander) – Other masala & spice powders – and traditional sweets.
        </p>
        <InternationalShippingCallout />
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <p className="text-destructive">Failed to load products. Please try again later.</p>
        </div>
      )}

      {displayProducts && displayProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id.toString()} product={product} />
          ))}
        </div>
      )}

      {displayProducts && displayProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No products available at the moment.</p>
        </div>
      )}
    </div>
  );
}
