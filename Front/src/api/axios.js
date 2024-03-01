import axios from 'axios';

const baseURL = "http://dev.serviapp.solutions:3001"

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
