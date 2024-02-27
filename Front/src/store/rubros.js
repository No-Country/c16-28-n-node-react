import create from 'zustand';
const URL = "http://dev.serviapp.solutions:3001" || "http://localhost:3001"

const rubroStore = create((set) => ({
  rubros:[],
  loadRubros: async () => {
    try {
      const response = await fetch( URL +`/rubros`);
      const data = await response.json();
      set({ rubros: data });
      
    } catch (error) {
      console.error('Error loading rubros:', error);
    }
  },
}));

export default rubroStore;
