import { Link } from 'react-router-dom';
const ConfirmationPage = () => {

  return (
    <div className='bg-skyBlue p-10 rounded-md shadow-md'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-center font-bold text-gray-700 mb-5'>
          ¡Tu cuenta ha sido creada con éxito!
        </h1>
        <div className='flex items-center justify-center'>
          <figure>
            <img
              src='../../../src/assets/confirmation-image.png'
              alt='confirmation image'
            />
          </figure>
        </div>
        <p className='text-center mt-2'>
          Ahora puedes buscar a los mejores proveedores de servicios cerca de
          ti.
        </p>
        <Link
          to={'/'}
          className='primaryBtn w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 mt-5'
        >
          Comenzar
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
