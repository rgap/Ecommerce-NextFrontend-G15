// src/store/useCartStore.js
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      shippingOption: "regular", // Default shipping option
      checkoutInfo: {}, // Stores checkout-related details
      setShippingOption: option => set({ shippingOption: option }),
      setCheckoutInfo: info => set({ checkoutInfo: info }),
      addToCart: newProduct => {
        const productInCartIndex = get().cart.findIndex(item => item.id === newProduct.id);
        if (productInCartIndex >= 0) {
          const newState = get().cart.map(item => {
            if (item.id === newProduct.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          set({ cart: newState });
        } else {
          const newState = [...get().cart, { ...newProduct, quantity: 1 }];
          set({ cart: newState });
        }
      },
      removeFromCart: productId =>
        set(state => {
          const newState = state.cart
            .map(item => {
              if (item.id === productId) {
                return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : false;
              }
              return item;
            })
            .filter(Boolean);
          set({ cart: newState });
        }),
      deleteFromCart: productId =>
        set(state => {
          const newState = state.cart.filter(item => item.id !== productId);
          set({ cart: newState });
        }),
      resetCart: () => set({ cart: [] }),
      resetAll: () => set({ cart: [], shippingOption: "regular", checkoutInfo: {} }),
    }),
    {
      name: "cart-storage", // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage for storage
    }
  )
);
