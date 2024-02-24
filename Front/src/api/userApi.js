import api from './axios';

export const registerUser = async () => {
  try {
    const res = await api.post('/register');
    console.log(res)
    return res.data;
  } catch (error) {
    throw error.data.message || 'Server Error';
  }
};
