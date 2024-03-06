import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className='px-6 min-h-screen'>
      <div className='flex flex-col gap-8'>
        <h1>Inicia sesión</h1>
        <LoginForm />
        <div className='w-full flex justify-center items-center'>
          <div className='w-full h-px bg-black mx-5'></div>
          <span className='text-text'>o</span>
          <div className='w-full h-px bg-black mx-5'></div>
        </div>
        <Link to={'/register/user'} className='secondaryBtn'>
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
