import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    set => ({
      user: null,
      saveUser: userData => {
        set({ user: userData });
      },
      logOutUser: () => {
        set({ user: null });
      },
    }),
    {
      name: "user-storage", // unique name for the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage for storage
    }
  )
);
