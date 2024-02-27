import create from 'zustand';
const URL = "http://localhost:3001" || "http://dev.serviapp.solutions:3001"

const providerStore = create((set) => ({
  providers: [],
  providersDetails: {},
  loadProviders: async (id_service) => {
    try {
      const response = await fetch(URL + `/ProvService/${id_service}`);
      const data = await response.json();

      const details = {};
      for (const provider of data) {
        const providerData = await providerStore.getState().getProviderByIdProv(provider.id_prov);

        details[provider.id_prov] = providerData;
      }
      set({ providers: data, providersDetails: details });
    } catch (error) {
      console.error('Error loading providers:', error);
    }
  },
  getProviderByIdProv: async (id_prov) => {
    try {
      const response = await fetch(`${URL}/providers/${id_prov}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting provider by id_prov:', error);
      return null;
    }
  },
}));


export default providerStore;