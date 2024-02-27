import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();
const useServiceStore = create((set) => ({
  services: [],
  loadServices: async (id_rubro) => {
    try {
      const response = await api.get(`/services/${id_rubro}`);
      set({ services: response.data });
    } catch (error) {
      console.error('Error loading services:', error);
    }
  },
  resetServices: () => set({ services: [] }),
}));

export default useServiceStore;
