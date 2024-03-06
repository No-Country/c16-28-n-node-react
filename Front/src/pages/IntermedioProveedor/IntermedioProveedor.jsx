import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import providerStore from '../../store/dataProv';
import useUserStore from '../../store/auth';

const IntermedioProveedor = () => {
  const { id, role } = useUserStore();
  const { provider, loadprovider } = providerStore();

  useEffect(() => {
    if (id && role === 'provider') {
      loadprovider(id);
    }
  }, [loadprovider, id, role]);

  // Verifica si hay algún dato faltante en el perfil del proveedor
  const datosFaltantes =
    !provider || Object.values(provider).some((value) => !value);

  if (!id || role !== 'provider') {
    // Si no hay un proveedor logueado, redirige a la página de inicio
    return <Navigate to='/' />;
  }

  if (!datosFaltantes) {
    // Si el perfil del proveedor está completo, redirige a la página de perfil
    return <Navigate to='/proveedor/perfil' />;
  }

  return (
    <div className='min-h-screen min-w-full'>
      <section className='flex flex-col gap-8 justify-center py-8'>
        <h1 className='px-8'>Bienvenido a tu perfil profesional</h1>
        <div className='min-w-full flex flex-col gap-3 justify-center items-center bg-orange rounded-md p-6'>
          <h2 className='text-center'>Termina de configurar tu perfil</h2>
          <p className='text-pretty'>
            Y podrás ofrecer tus servicios y usar al máximo ServiApp.
          </p>
          <Link to='/providers/editar-perfil' className='btnProviders'>
            Comenzar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IntermedioProveedor;
