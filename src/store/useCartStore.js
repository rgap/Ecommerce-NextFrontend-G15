import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: newProduct =>
        set(state => {
          const productInCartIndex = state.cart.findIndex(item => item.id === newProduct.id);

          if (productInCartIndex >= 0) {
            const newState = state.cart.map(item => {
              if (item.id === newProduct.id) {
                if (item.quantity <= 9) {
                  return { ...item, quantity: item.quantity + 1 };
                }
              }
              return item;
            });

            return { cart: newState };
          }

          const newItem = [...state.cart, { ...newProduct, quantity: 1 }];
          return { cart: newItem };
        }),
      removeFromCart: productId =>
        set(state => {
          const newState = state.cart.map(item => {
            if (item.id === productId) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return false;
              }
            }
            return item;
          });

          const newStateFiltered = newState.filter(item => item !== false);
          return { cart: newStateFiltered };
        }),
      deleteFromCart: productId =>
        set(state => {
          const newState = state.cart.filter(item => item.id !== productId);
          return { cart: newState };
        }),
      resetCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage for storage
    }
  )
);
