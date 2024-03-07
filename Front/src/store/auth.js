import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      token: '',
      role: '',
      id:null,
      setTokenAndRole: (token, role , id) =>
        set((state) => ({ ...state, token, role , id })),
      logout: () => set({ token: '', role: '' , id:null}),
    }),
    {
      name: 'auth',
    }
  )
);

export default useUserStore;