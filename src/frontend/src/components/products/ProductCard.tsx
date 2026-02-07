import { MessageCircle } from 'lucide-react';
import type { Product, Category } from '../../backend';
import { ResponsiveImage } from '../media/ResponsiveImage';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const categoryLabels: Record<Category, string> = {
  oil: 'Coconut oil',
  spices: 'Spice powders (chilli, turmeric, coriander)',
  blends: 'Other masala & spice powders',
  sweets: 'Traditional Sweets',
};

const categoryImageMap: Record<string, string> = {
  '/virgin-coconut-oil.webp': '/assets/generated/product-coconut-oil.dim_800x800.png',
  '/pure-coconut-oil.webp': '/assets/generated/product-coconut-oil.dim_800x800.png',
  '/red-chilli-powder.webp': '/assets/generated/product-spice-powders.dim_800x800.png',
  '/red-chilli-powder-mild.webp': '/assets/generated/product-spice-powders.dim_800x800.png',
  '/turmeric-powder.webp': '/assets/generated/product-spice-powders.dim_800x800.png',
  '/coriander-powder.webp': '/assets/generated/product-spice-powders.dim_800x800.png',
  '/sarkara-varatti.webp': '/assets/generated/product-kerala-sweets.dim_800x800.png',
  '/sweet-diamond-cuts.webp': '/assets/generated/product-kerala-sweets.dim_800x800.png',
  '/non-veg-masala-powder.webp': '/assets/generated/product-masala-assorted.dim_800x800.png',
  '/unda.webp': '/assets/generated/product-kerala-sweets.dim_800x800.png',
  '/achappam.webp': '/assets/generated/product-kerala-sweets.dim_800x800.png',
  '/kozalappam.webp': '/assets/generated/product-kerala-sweets.dim_800x800.png',
};

export function ProductCard({ product }: { product: Product }) {
  const imageUrl = categoryImageMap[product.imageUrl] || product.imageUrl;
  
  const handleContactClick = () => {
    const message = `Hello! I'm interested in ${product.name}. Can you provide more details?`;
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-card border rounded-lg overflow-hidden hover:shadow-soft transition-shadow">
      <div className="aspect-square bg-muted/30 relative overflow-hidden">
        <ResponsiveImage
          src={imageUrl}
          alt={product.name}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center rounded-full bg-background/90 px-2.5 py-0.5 text-xs font-medium text-foreground">
            {categoryLabels[product.category]}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-end">
          <button
            onClick={handleContactClick}
            disabled={!product.isAvailable}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
