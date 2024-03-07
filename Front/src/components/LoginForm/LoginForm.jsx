import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import configureAxios from '../../api/axios';
import useUserStore from '../../store/auth';
import { Eye } from 'lucide-react';

const LoginForm = () => {
  const { setTokenAndRole } = useUserStore();
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
console.log(token, role, id)
      setTokenAndRole(token, role, id);
      if (role === 'user') {
        navigate('/');
      } else {
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

    if (!email || !password) {
      toast.error('Por favor, completa correctamente el formulario.');
      return;
    }

    await handleLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div>
      <form
        className='flex flex-col rounded border p-4 gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='email' className='mb-2 text-text text-black'>
            Correo Electrónico <span className='text-red'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-[#fff] p-3 rounded border text-text text-gray outline-none'
            placeholder='Escribe tu correo...'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='mb-2 text-text text-black'>
            Contraseña <span className='text-red'>*</span>
          </label>
          <div className='w-full flex'>
            <div className='w-full flex items-center justify-center'>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                className='w-full bg-[#fff] p-3 rounded rounded-r-none border border-r-0 text-text text-gray outline-none pr-12'
                placeholder='Escribe tu contraseña...'
              />
              <div
                className='p-3 rounded rounded-l-none border border-l-0 bg-[#fff] cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                <Eye size={21} />
              </div>
            </div>
          </div>
        </div>
        {error && <div className='text-red text-sm text-center'>{error}</div>}
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
