import configureAxios from './axios';
const api = configureAxios();

export const registerUser = async (route, newUser) => {
  try {
    const res = await api.post(route, newUser);
    return res;
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error.response || 'Server Error';
  }
};
