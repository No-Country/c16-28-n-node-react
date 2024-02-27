import { useState } from 'react';
import configureAxios from '../../api/axios';
import useUserStore from '../../store/auth';

const LoginForm = () => {
  const setTokenAndRole = useUserStore((state) => state.setTokenAndRole);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const api = configureAxios();

  const handleLogin = async () => {
    setError(null);

    try {
      const res = await api.post('/login', { ...formData });
      const { token, role } = res.data;

      setTokenAndRole(token, role);
    } catch (error) {
      console.error('Error>>>', error.response?.status);
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log(formData);
    await handleLogin({ email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='bg-white p-10 rounded-md shadow-md'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-gray-700 mb-5'>
          Iniciar sesión
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='email'
            >
              Correo Electrónico
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='mb-5'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div className='flex items-center justify-between mb-5'>
            <a
              href='/forgot-password'
              className='text-sm text-gray-500 hover:underline'
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type='submit'
            className='primaryBtn w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Iniciar sesión
          </button>
        </form>
        {error && <div className='error-message'>{error.message}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
