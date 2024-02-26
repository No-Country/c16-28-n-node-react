import create from 'zustand';
const URL = "http://localhost:3001"

const useServiceStore = create((set) => ({
  services: [],
  loadServices: async (id_rubro) => {
    try {
      const response = await fetch( URL +`/services/${id_rubro}`);
      const data = await response.json();
      set({ services: data });
      
    } catch (error) {
      console.error('Error loading services:', error);
    }
  },
}));

export default useServiceStore;
