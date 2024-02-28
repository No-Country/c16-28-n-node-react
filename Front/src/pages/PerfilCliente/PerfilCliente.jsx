import { useEffect } from 'react';
import useUserStore from '../../store/auth';
import userStore from '../../store/users';
import { useNavigate } from 'react-router-dom';

const PerfilCliente = () => {
  const { user} = userStore();
  // const { id_user } = useParams();
  const { token } = useUserStore();
  const navigate = useNavigate()
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token]);
  return (
    <div className='bg-white p-10 rounded-md shadow-md'>
      <div className='flex flex-col items-center'>
        {token && (
          <h1 className='text-2xl text-center font-bold text-dark mb-5'>
            ¡Bienvenido a ServiApp, {user?.name || 'usuario'} 🎉!
          </h1>
        )}
        <p className='text-black text-center mb-10'>
          Conecta con profesionales de servicios de confianza en tu zona.
        </p>
        {token && (
          <div className='flex flex-col items-center'>
            <button
              type='button'
              className='primaryBtn w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Solicitar un servicio
            </button>
            <button
              type='button'
              className='text-sm text-gray-500 hover:underline mt-5'
            >
              Cerrar sesión
            </button>
          </div>
        )}
        {!token && (
          <div className='flex flex-col items-center'>
            <a
              href='/login'
              className='primaryBtn w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Iniciar sesión
            </a>
            <a
              href='/register'
              className='text-sm text-gray-500 hover:underline mt-5'
            >
              Registrarse
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilCliente;
