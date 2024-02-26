import configureAxios from './axios';

export const registerUser = async (newUser) => {
  try {
    const api = configureAxios();
    const res = await api.post('/users', newUser);
    return res.data;
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error || 'Server Error';
  }
};
