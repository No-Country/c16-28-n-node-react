import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();
const rubroStore = create((set) => ({
  rubros: [],
  loadRubros: async () => {
    try {
      const response = await api.get('/rubros');
      set({ rubros: response.data });
    } catch (error) {
      console.error('Error loading rubros:', error);
    }
  },
}));

export default rubroStore;
