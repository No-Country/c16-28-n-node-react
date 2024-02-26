import { useState } from 'react';
import { registerUser } from '../../api/userApi';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, lastName, email, password } = formData;
    const userData = { name, lastName, email, password };
    console.log(userData);
    await registerUser(userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Validaciones
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
    }
  };

  return (
    <div className='bg-white p-10 rounded-md shadow-md'>
      <form onSubmit={handleSubmit}>
        <div className='flex mb-5 gap-2'>
          <div className='w-full sm:w-1/2 mb-5 sm:mb-0'>
            <label
              className='block mb-2 text-sm font-medium text-gray-700'
              htmlFor='name'
            >
              Nombre
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
              Apellido
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
          {errors.email && (
            <span style={{ color: 'red' }}>
              Ingresa un Correo Electrónico valido.
            </span>
          )}
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

        <button
          type='submit'
          className='primaryBtn w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
