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

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [passwordType, setPasswordType] = useState('password');

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

    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
      }));
    } else if (name === 'password') {
      const hasCapital = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[.!%*?&#]/.test(value);
      const minLength = value.length >= 6;
      const maxLength = value.length <= 10;

      setErrors((prevErrors) => ({
        ...prevErrors,
        password: !hasCapital || !hasNumber || !hasSpecialChar || !minLength || !maxLength,
        passwordHasCapital: !hasCapital,
        passwordHasNumber: !hasNumber,
        passwordHasSpecialChar: !hasSpecialChar,
        passwordMinLength: !minLength,
        passwordMaxLength: !maxLength,
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
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
            <span className='text-red'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-background p-3 rounded border text-text text-gray outline-none'
            placeholder='Escribe tu correo...'
          />
          {errors.email && <span className='text-sm text-red font-medium mt-1 pl-1'>Correo electrónico inválido.</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className='mb-2 text-text text-black'>
            Contraseña <span className='text-red'>*</span>
          </label>
          <div className='w-full flex'>
            <input
              type={passwordType}
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-5/6 bg-background p-3 rounded-l border-y	border-l text-text text-gray outline-none'
              placeholder='Escribe tu contraseña...'
            />
            <button
              className='w-1/6 bg-background p-3 rounded-r border-y border-r text-text text-gray'
              onClick={togglePasswordVisibility}
            >
              o
            </button>
          </div>
          {errors.password && (
              <ul className='flex flex-col text-sm text-red font-medium mt-1 pl-1'>
                <li>{errors.passwordMinLength && 'Debe tener entre 6 y 10 caracteres.'}</li>
                <li>{errors.passwordMaxLength && 'Debe tener máximo 10 caracteres.'}</li>
                <li>{errors.passwordHasCapital && 'Debe contener al menos una letra mayúscula y minúscula.'}</li>
                <li>{errors.passwordHasNumber && 'Debe contener al menos un número.'}</li>
                <li>{errors.passwordHasSpecialChar && 'Debe contener un caracter especial ".!%*?&#"'}</li>
                <li>{!errors.passwordHasCapital && !errors.passwordHasNumber && !errors.passwordHasSpecialChar && !errors.passwordMinLength && !errors.passwordMaxLength && 'Contraseña inválida.'}</li>
              </ul>
            )}
        </div>
        <div className='pb-0.5 self-center border-b border-black border-1'>
          <Link to={'#'} className='text-text text-center text-dark'>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <button type='submit' className='primaryBtn'>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;