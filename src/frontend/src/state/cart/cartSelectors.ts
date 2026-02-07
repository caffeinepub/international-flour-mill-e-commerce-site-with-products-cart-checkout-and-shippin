import type { CartItem } from './CartContext';

export function calculateLineTotal(item: CartItem): number {
  return Number(item.product.priceCents) * item.quantity;
}

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + calculateLineTotal(item), 0);
}
