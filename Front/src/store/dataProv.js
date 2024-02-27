import create from 'zustand';
const URL = "http://localhost:3001" || "http://dev.serviapp.solutions:3001";

const providerStore = create((set) => ({
  provider:[],
  loadprovider: async (id_prov) => {
    try {
      const response = await fetch( `${URL}/providers/${id_prov}`);
      const data = await response.json();
      set({ provider: data });
      
    } catch (error) {
      console.error('Error loading provider:', error);
    }
  },
}));

export default providerStore;