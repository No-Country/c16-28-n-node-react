import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';

const RegisterPage = () => {
  return (
    <section className='flex flex-col gap-8 px-6'>
      <h1>Crea tu cuenta</h1>
      <div className='flex items-center justify-center gap-2'>
        <Link className='primaryBtn w-full' to={'/register/user'}>
          Cliente
        </Link>
        <Link className='btnProviders w-full' to={'/register/provider'}>
          Profesional
        </Link>
      </div>
      <RegisterForm />
      <div className='w-full'>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-full flex items-center'>
            <div className='border-t w-full border-gray-300'></div>
            <div className='h-10 w-10 flex justify-center items-center mx-2'>
              <p className='text-gray-500 text-sm'>O</p>
            </div>
            <div className='border-t w-full border-gray-300'></div>
          </div>
          <div className='flex flex-col items-center justify-center pb-8'>
            <p>¿Ya estás registrado?</p>
            <Link to={'/login'}>Inicia sesión</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
