import axios from 'axios';
import { useAuthStore } from '../store/auth';

const baseURL = 'http://localhost:3001';
const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default api;
