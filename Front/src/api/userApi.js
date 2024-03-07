import configureAxios from './axios';
const api = configureAxios();

export const getUserById = async (route, id_user) => {
  try {
    const res = await api.get(`/${route}/${id_user}`)
    return res.data
  } catch (error) {
    console.error('ERROR OBTENIENDO USUARIO:>>>', error);
  }
};

export const registerUser = async (route, newUser) => {
  console.log('newUser', newUser);
  try {
    console.log(route, newUser);
    const res = await api.post(route, newUser);
    return res.data;
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error.response || 'Server Error';
  }
};
