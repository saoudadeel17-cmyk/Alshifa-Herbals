'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'alshifa_cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [bump, setBump] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage once, on mount (client only)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      setCart(saved);
    } catch (e) {
      setCart([]);
    }
    setHydrated(true);
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      /* ignore quota errors */
    }
  }, [cart, hydrated]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { ...product, qty }];
    });
    setBump(true);
    setTimeout(() => setBump(false), 350);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQty, cartCount, subtotal, bump }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
