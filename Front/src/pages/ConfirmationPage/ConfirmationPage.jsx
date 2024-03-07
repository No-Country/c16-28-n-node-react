import { useLocation } from 'react-router-dom';
const ConfirmationPage = () => {
  const location = useLocation();

  let message = '';
  let image = '';
  if (location.pathname === '/confirmation-user-page') {
    message =
      'Ahora puedes buscar a los mejores proveedores de servicios cerca de ti pero, te falta un paso:';
    image =
      'https://res.cloudinary.com/dq9icw8vb/image/upload/v1709240734/mtfpvlbmuspg2ym2oezz.png';
  } else {
    message =
      'Ahora puedes mostrar tus habilidades, cargar fotos de tus trabajos y comenzar a recibir solicitudes de servicio. ¡Gracias por unirte a nosotros! Pero, te falta un paso:';
    image =
      'https://res.cloudinary.com/dq9icw8vb/image/upload/v1709679943/construction-worker-monochromatic_1_h16yjh.png';
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-balance text-center font-bold text-gray-700 mb-5'>
        ¡Tu cuenta ha sido creada con éxito!
      </h1>
      <div className='flex flex-col items-center bg-skyBlue p-10 rounded-md'>
        <h2 className='text-2text-balance font-bold'>Verifica tu cuenta</h2>
        <div className='flex items-center justify-center'>
          <figure>
            <img src={image} alt='confirmation image' />
          </figure>
        </div>
        <div className='flex flex-col gap-1 mt-6 text-center'>
          <p className='text-center mt-2'>{message}</p>
          <p className='font-bold'>¡Verifica tu cuenta!</p>
          <ul className='text-text text-pretty text-left'>
            <li>1.- Revisa tu correo electrónico.</li>
            <li>2.- Busca nuestro correo con el enlace de confirmación.</li>
            <li>3.- Haz click en el enlace de confirmación.</li>
            <li>4.- Se te redigirá a la página de inicio de sesión.</li>
          </ul>
          <p className='text-sm text-pretty'>
            No te olvides de revisar tu bandeja de correo no deseado si no
            encuentras nuestro correo.{' '}
          </p>
          <p className='text-base font-semibold'>¡Nos vemos en ServiApp!</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
