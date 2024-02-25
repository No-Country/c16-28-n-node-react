import create from 'zustand';
const URL = "http://localhost:3001"

const rubroStore = create((set) => ({
  rubros:[],
  loadRubros: async () => {
    try {
      const response = await fetch( URL +`/rubros`);
      const data = await response.json();
      console.log(data)
      set({ rubros: data });
      
    } catch (error) {
      console.error('Error loading rubros:', error);
    }
  },
}));

export default rubroStore;
