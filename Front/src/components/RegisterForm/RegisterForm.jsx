import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../api/userApi';
import rubroStore from '../../store/rubros';

const RegisterForm = () => {
  const { rubros, loadRubros } = rubroStore();

  useEffect(() => {
    loadRubros();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    category: '',
  });

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
    e.preventDefault();
    const { name, lastName, email, password, category } = formData;
    const userData = { name, lastName, email, password, category };
    try {
      const route =
        location.pathname === '/register/user' ? '/users' : '/providers';
      const res = await registerUser(route, userData);
      console.log(res)

      res && location.pathname === '/register/user'
        ? navigate('/confirmation-user-page')
        : navigate('/confirmation-provider-page');
    } catch (error) {
      if (error.status === 400) {
        setErrorMessage(
          `El correo ${email} ya se encuentra en uso. Inténtalo con otro o... `
        );
      } else {
        setErrorMessage(
          'Ocurrió un error inesperado. Intente nuevamente más tarde.'
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
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: value.trim().length < 3,
      }));
    } else if (name === 'lastName') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: value.trim().length < 3,
      }));
    } else if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value),
      }));
    } else if (name === 'password') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/.test(
            value
          ),
      }));
    } else if (name === 'category') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: value === '',
      }));
    }
  };

  const providerUrl = location.pathname === '/register/provider';

  return (
    <div className='bg-white p-10 rounded-md shadow-md'>
      <form onSubmit={handleSubmit}>
        <div className='flex mb-5 gap-2'>
          <div className='w-full sm:w-1/2 mb-5 sm:mb-0'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='name'
            >
              Nombre <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-bl-500 focus:border-skyBlue-500 sm:text-sm'
            />
            {errors.name && (
              <span style={{ color: 'red' }}>
                El nombre debe tener al menos 3 caracteres.
              </span>
            )}
          </div>
          <div className='w-full sm:w-1/2'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='lastName'
            >
              Apellido <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
            {errors.lastName && (
              <span style={{ color: 'red' }}>
                El apellido debe tener al menos 3 caracteres.
              </span>
            )}
          </div>
        </div>

        <div className='mb-5'>
          <label
            className='block mb-2 text-sm font-medium text-gray-700'
            htmlFor='email'
          >
            Correo Electrónico <span style={{ color: 'red' }}>*</span>
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
          {errors.email && (
            <span style={{ color: 'red' }}>
              Ingresa un Correo Electrónico valido.
            </span>
          )}
          {errorMessage && (
            <span style={{ color: 'red' }}>
              {errorMessage} <Link to={'/login'}>Inicia Sesión</Link>
            </span>
          )}
        </div>

        <div className='mb-5'>
          <label
            className='block mb-2 text-sm font-medium text-gray-700'
            htmlFor='password'
          >
            Contraseña <span style={{ color: 'red' }}>*</span>
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
          {errors.password && (
            <>
              <p style={{ color: 'red' }}>
                La contraseña que estás intentando crear no cumple con los
                requerimientos.
              </p>
              <ul style={{ color: 'red' }}>
                <li>La contraseña debe tener entre 6 y 10 caracteres.</li>
                <li>Al menos una letra mayúscula.</li>
                <li>Al menos una letra minúscula.</li>
                <li>Al menos un número.</li>
                <li>Al menos un carácter especial.</li>
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

        <button type='submit' className={`${submitButtomColor} w-full`}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
