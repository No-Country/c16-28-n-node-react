import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();

const userStore = create((set) => ({
  user: {},
  loadUserById: async (userId) => {
    try {
      const res = await api.get(`/users/${userId}`);
      set({ user: res.data });
    } catch (error) {
      console.error('Error loading user by ID:', error);
    }
  },
}));

export default userStore;
