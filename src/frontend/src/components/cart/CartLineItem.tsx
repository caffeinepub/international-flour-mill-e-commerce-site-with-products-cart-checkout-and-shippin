import { Minus, Plus, Trash2 } from 'lucide-react';
import type { CartItem } from '../../state/cart/CartContext';
import { useCart } from '../../state/cart/CartContext';
import { COPY } from '../../constants/copy';

export function CartLineItem({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b last:border-b-0">
      <div className="h-20 w-20 flex-shrink-0 rounded-md bg-muted/30 overflow-hidden">
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm mb-1">{item.product.name}</h4>
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="text-sm font-medium w-8 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.product.id)}
          className="text-muted-foreground hover:text-destructive transition-colors"
          title={COPY.cart.remove}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
