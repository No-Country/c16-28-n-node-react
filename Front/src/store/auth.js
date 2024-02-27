import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      token: '',
      role: '',
      setTokenAndRole: (token, role) =>
        set((state) => ({ ...state, token, role })),
    }),
    {
      name: 'auth',
    }
  )
);

export default useUserStore;
