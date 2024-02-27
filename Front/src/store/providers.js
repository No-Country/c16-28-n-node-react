import { create } from 'zustand';
import configureAxios from '../api/axios';

const api = configureAxios()

const providerStore = create((set) => ({
  providers: [],
  providersDetails: {},
  loadProviders: async (id_service) => {
    try {
      const response = await api.get(`/ProvService/${id_service}`);

      const details = {};
      for (const provider of response.data) {
        const providerData = await providerStore.getState().getProviderByIdProv(provider.id_prov);

        details[provider.id_prov] = providerData;
      }
      set({ providers: response.data, providersDetails: details });
    } catch (error) {
      console.error('Error loading providers:', error);
    }
  },
  getProviderByIdProv: async (id_prov) => {
    try {
      const response = await api.get(`/providers/${id_prov}`);
      return response.data;
    } catch (error) {
      console.error('Error getting provider by id_prov:', error);
      return null;
    }
  },
  resetProviders: () => set({ providersDetails: {} }),
}));


export default providerStore;