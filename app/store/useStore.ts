'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
  id: number | string;
  title?: string;
  price?: number | string;
  newPrice?: string;
  oldPrice?: string;
  imageUrl?: string;
};

export type CartItem = Product & {
  quantity: number;
};

type Store = {
  favorites: Product[];
  cart: CartItem[];
  addFavorite: (p: Product) => void;
  removeFavorite: (id: number | string) => void;
  toggleFavorite: (p: Product) => void;
  addToCart: (p: Product) => void;
  removeFromCart: (id: number | string) => void;
  updateCartQuantity: (id: number | string, delta: number) => void;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      favorites: [],
      cart: [],
      addFavorite: (p) => set((s) => ({ favorites: Array.from(new Map([...s.favorites, p].map(x => [x.id, x])).values()) })),
      removeFavorite: (id) => set((s) => ({ favorites: s.favorites.filter(f => f.id !== id) })),
      toggleFavorite: (p) => {
        const exists = get().favorites.some(f => f.id === p.id);
        if (exists) get().removeFavorite(p.id);
        else get().addFavorite(p);
      },
      addToCart: (p) => set((s) => {
        const existing = s.cart.find(item => item.id === p.id);
        if (existing) {
          return {
            cart: s.cart.map(item =>
              item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          };
        }
        return { cart: [...s.cart, { ...p, quantity: 1 }] };
      }),
      removeFromCart: (id) => set((s) => ({ cart: s.cart.filter(item => item.id !== id) })),
      updateCartQuantity: (id, delta) => set((s) => ({
        cart: s.cart.map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
      }))
    }),
    {
      name: 'makarets-store',
      partialize: (state) => ({ favorites: state.favorites, cart: state.cart })
    }
  )
);

export default useStore;
