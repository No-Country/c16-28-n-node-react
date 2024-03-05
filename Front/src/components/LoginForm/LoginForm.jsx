import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import configureAxios from '../../api/axios';
import useUserStore from '../../store/auth';

const LoginForm = () => {
  const setTokenAndRole = useUserStore((state) => state.setTokenAndRole);
  const navigate = useNavigate();

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
      const { token, role, id } = res.data;

      setTokenAndRole(token, role, id);
      if(role === 'user') {
        navigate('/')
      }else {
        navigate('/profile-verification');
      }
      toast.success('Usuario conectado exitosamente'); 
    } catch (error) {

      if (error.response && error.response.status === 403) {
        setError(error.response.data);
    } else {
        toast.error('Ooops algo ha salido mal, vuelve a intentarlo');
        setError('Error de inicio de sesión');
    }
}
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
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
    <div>
      <form
        className='flex flex-col rounded border p-4 gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='email' className='mb-2 text-text text-black'>
            Correo Electrónico{' '}
            <span className='text-text font-light text-red'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-background p-3 rounded border text-text text-gray'
            placeholder='Escribe tu correo...'
          />
          {error && <div className='text-text text-red font-medium'>{error}</div>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='mb-2 text-text text-black'>
            Contraseña <span className='text-text font-light text-red'>*</span>
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='bg-background p-3 rounded border text-text text-gray'
            placeholder='Escribe tu contraseña...'
          />
          {error && <div className='text-text text-red font-medium'>{error}</div>}
        </div>
        <div className='pb-0.5 self-center border-b border-black border-1'>
          <Link to={'#'} className='text-text text-center text-dark'>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <button type='submit' className='primaryBtn'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
