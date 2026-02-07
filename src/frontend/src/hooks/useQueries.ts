import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Product, Order } from '../backend';

export function useProducts() {
  const { actor, isFetching } = useActor();

  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      if (!actor) return [];
      const allProducts = await actor.getProducts();
      
      // Filter out "Virgin Coconut Oil" and ensure only one "Pure Coconut Oil" entry
      const filteredProducts = allProducts.filter(
        (product) => product.name !== 'Virgin Coconut Oil'
      );
      
      // De-duplicate any coconut oil entries (keep only first "Pure Coconut Oil")
      const seenCoconutOil = new Set<string>();
      return filteredProducts.filter((product) => {
        if (product.name === 'Pure Coconut Oil') {
          if (seenCoconutOil.has('Pure Coconut Oil')) {
            return false;
          }
          seenCoconutOil.add('Pure Coconut Oil');
        }
        return true;
      });
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProduct(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Product>({
    queryKey: ['product', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function usePlaceOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (orderData: Omit<Order, 'id' | 'placedAt'>) => {
      if (!actor) throw new Error('Actor not initialized');
      const orderId = await actor.placeOrder({
        ...orderData,
        id: BigInt(0),
        placedAt: BigInt(Date.now() * 1000000),
      } as Order);
      return orderId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}

export function useOrder(id: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Order>({
    queryKey: ['order', id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) throw new Error('Actor not initialized or no order ID');
      return actor.getOrder(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}
