import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { registerUser } from '../../api/userApi';
import { Eye } from 'lucide-react';
import rubroStore from '../../store/rubros';

const RegisterForm = () => {
  const { rubros, loadRubros } = rubroStore();
  const [error, setError] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const timeOut =
    error !== null ? setTimeout(() => setError(null), 5000) : undefined;

  useEffect(() => {
    loadRubros();
    timeOut;
  }, [loadRubros, timeOut]);

  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
  });
  console.log(formData);

  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    category: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const submitButtomColor =
    location.pathname === '/register/user' ? 'primaryBtn' : 'btnProviders';

  const handleSubmit = async (e) => {
    console.log('handlesubmit')
    e.preventDefault();
    setIsCreatingAccount(true);
    const { name, lastName, email, password, category } = formData;
    const userData = { name, lastName, email, password, category };
    try {
      const route =
        location.pathname === '/register/user' ? '/users' : '/providers';
        console.log(route)
      const res = await registerUser(route, userData);
      res && location.pathname === '/register/user'
        ? navigate('/confirmation-user-page')
        : navigate('/confirmation-provider-page');
      setIsCreatingAccount(false);
      toast.success('Tu cuenta ha sido creada. Verifica tu email');
    } catch (error) {
      if (error.status === 400) {
        setErrorMessage(
          `El correo ${email} ya se encuentra en uso. Inténtalo con otro o... `
        );
        setError(error.status);
      } else {
        toast.error(
          'Ocurrió un error inesperado. Comprueba los datos en el formulario'
        );
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'name') {
      const minLengthName = value.length >= 3;

      setErrors((prevErrors) => ({
        ...prevErrors,
        //name: value.trim().length < 3,
        name: !minLengthName,
      }));
    } else if (name === 'lastName') {
      const minLengthLastName = value.length >= 3;

      setErrors((prevErrors) => ({
        ...prevErrors,
        //lastName: value.trim().length < 3,
        lastName: !minLengthLastName,
      }));
    } else if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
      }));
    } else if (name === 'password') {
      const hasCapital = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[@$!%*?&.#]/.test(value);
      const minLength = value.length >= 6;
      const maxLength = value.length <= 10;

      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          !hasCapital ||
          !hasNumber ||
          !hasSpecialChar ||
          !minLength ||
          !maxLength,
        passwordHasCapital: !hasCapital,
        passwordHasNumber: !hasNumber,
        passwordHasSpecialChar: !hasSpecialChar,
        passwordMinLength: !minLength,
        passwordMaxLength: !maxLength,
      }));
    } else if (name === 'category') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: value === '',
      }));
    }
  };

  const buttonText = isCreatingAccount ? 'Creando tu cuenta...' : 'Registrarse';

  const providerUrl = location.pathname === '/register/provider';

  return (
    <div>
      <form
        className='flex flex-col rounded border p-4 gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-2'>
          <div className='w-full sm:w-1/2'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='name'
            >
              Nombre <span className='text-red'>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='bg-background w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-bl-500 focus:border-skyBlue-500 sm:text-sm'
            />
            {errors.name && (
              <div className='text-sm text-red font-medium mt-1 pl-1'>
                <span>Debe contener al menos 3 caracteres.</span>
              </div>
            )}
          </div>
          <div className='w-full sm:w-1/2'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='lastName'
            >
              Apellido <span className='text-red'>*</span>
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='bg-background w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.lastName && (
              <div className='text-sm text-red font-medium mt-1 pl-1'>
                <span>Debe contener al menos 3 caracteres.</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            className='block mb-2 text-sm font-medium text-gray-700'
            htmlFor='email'
          >
            Correo Electrónico <span className='text-red'>*</span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-background w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
          {errors.email && (
            <span className='text-sm text-red font-medium mt-1 pl-1'>
              Ingresa un Correo Electrónico válido.
            </span>
          )}
          {errorMessage && error && (
            <span style={{ color: 'red' }}>
              {errorMessage} <Link to={'/login'}>Inicia Sesión</Link>
            </span>
          )}
        </div>

        <div>
          <label
            className='block mb-2 text-sm font-medium text-gray-700'
            htmlFor='password'
          >
            Contraseña <span className='text-red'>*</span>
          </label>
          <div className='flex items-center justify-center'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='bg-background w-full px-4 py-2 border border-r-0 border-gray-300 rounded-md rounded-r-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none'
            />
            <div
              className='rounded-md rounded-l-none border border-l-0 px-4 py-2'
              onClick={handleToggleVisibility}
            >
              <Eye size={24} />
            </div>
          </div>
          {errors.password && (
            <>
              <ul className='flex flex-col text-sm text-red font-medium mt-1 pl-1'>
                <li>
                  {errors.passwordMinLength &&
                    'Debe tener entre 6 y 10 caracteres.'}
                </li>
                <li>
                  {errors.passwordMaxLength &&
                    'Debe tener entre 6 y 10 caracteres.'}
                </li>
                <li>
                  {errors.passwordHasCapital &&
                    'Debe tener al menos una letra mayúscula y minúscula.'}
                </li>
                <li>
                  {errors.passwordHasNumber && 'Debe tener al menos un número.'}
                </li>
                <li>
                  {errors.passwordHasSpecialChar &&
                    'Debe tener al menos un carácter especial.'}
                </li>
                <li>
                  {!errors.passwordHasCapital &&
                    !errors.passwordHasNumber &&
                    !errors.passwordHasSpecialChar &&
                    !errors.passwordMinLength &&
                    !errors.passwordMaxLength &&
                    'La contraseña no cumple con los requerimientos.'}
                </li>
              </ul>
            </>
          )}
        </div>

        {providerUrl && (
          <div className='mb-5'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='category'
            >
              Tu servicio <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id='category'
              name='category'
              value={formData.category}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              <option value=''>Encuentra tu servicio</option>
              {rubros &&
                rubros.map((categoria) => (
                  <option key={categoria.id_rubro} value={categoria.id_rubro}>
                    {categoria.name}
                  </option>
                ))}
            </select>
            {errors.category && (
              <span style={{ color: 'red' }}>
                Por favor selecciona una categoría.
              </span>
            )}
          </div>
        )}

        <button type='submit' className={`${submitButtomColor} w-full`}>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
