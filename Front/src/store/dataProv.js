import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();


const providerStore = create((set) => ({
  provider: [],
  loadprovider: async (id_prov) => {
    try {
      const response = await api.get(`/providers/${id_prov}`);
      set({ provider: response.data });
    } catch (error) {
      console.error('Error loading provider:', error);
    }
  },
}));

export default providerStore;
