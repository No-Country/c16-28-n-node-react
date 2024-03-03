import { create } from 'zustand';

const useCacheStore = create((set) => ({
    id_service: null,
    provider_data: {},
    setCacheData: (data) => set(data),
    loadCacheData: () => {
        const cachedData = JSON.parse(localStorage.getItem('cacheData')) || {};
        set(cachedData);
    },
    clearCacheData: () => {
        localStorage.removeItem('cacheData');
        set({
            id_service: null,
            provider_data: {},
        });
    },
}));

export default useCacheStore;
