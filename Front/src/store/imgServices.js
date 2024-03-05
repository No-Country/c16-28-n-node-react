import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();

const imgServiceStore = create((set) => ({
  imgs: [],
  error: null,
  loadImgs: async (id_prov, id_service) => {
    try {
      const { data } = await api.get(`/img/${id_prov}/${id_service}`);
      set({ imgs: data, error: null });
    } catch (error) {
      console.error('Error loading imgs:', error);
      set({ error: 'Error loading imgs' });
    }
  },
  resetImgs: () => set({ imgs: [] }),
}));

export default imgServiceStore;
