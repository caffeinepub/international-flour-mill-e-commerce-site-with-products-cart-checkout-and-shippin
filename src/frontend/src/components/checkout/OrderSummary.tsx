import type { CartItem } from '../../state/cart/CartContext';
import { COPY } from '../../constants/copy';

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shippingCountry?: string;
}

export function OrderSummary({ items, subtotal, shippingCountry }: OrderSummaryProps) {
  return (
    <div className="bg-muted/30 rounded-lg p-6 space-y-4">
      <h3 className="font-semibold text-lg">{COPY.checkout.orderSummary}</h3>
      
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.product.id.toString()} className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {item.product.name} × {item.quantity}
            </span>
          </div>
        ))}
      </div>

      {shippingCountry && (
        <div className="pt-3 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping to:</span>
            <span className="font-medium">{shippingCountry}</span>
          </div>
        </div>
      )}
    </div>
  );
}
