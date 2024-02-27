import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios();

const reviewsStore = create((set) => ({
  reviews: [],
  error: null,
  loadReviews: async (id_prov) => {
    try{
      const { data } = await api.get(`/reviews/${id_prov}`);
      set({ reviews: data, error: null });
    } catch (error) {
      console.error('Error loading reviews:', error);
      set({ error: 'Error loading reviews' });
    }
  },
}));

export default reviewsStore;
