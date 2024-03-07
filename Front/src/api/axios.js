import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL)

const configureAxios = (token) => {
  const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return api;
};

export default configureAxios;
