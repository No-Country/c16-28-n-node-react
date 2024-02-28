import { create } from 'zustand';
import configureAxios from '../api/axios';
const api = configureAxios();

const userStore = create((set) => ({
  user: {},
  loadUserById: async (id_user) => {
    try {
      const res = await api.get(`/users/${id_user}`)
      console.log(res);
      set({ user: res.data })
    } catch (error) {
      console.error(error)
    }
  },
}));

export default userStore
