import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) =>
        set((state) => ({
          token,
        })),
    }),
    {
      name: 'auth',
    }
  )
);
