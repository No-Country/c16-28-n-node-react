import { useEffect } from 'react';
import providerStore from '../../store/dataProv';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Proveedores = () => {
  const { provider, loadprovider } = providerStore();
  const { id_prov } = useParams();

  useEffect(() => {
    loadprovider(id_prov);
  }, [id_prov, loadprovider]);

  return (
    <div>
      <hr className='h-0.5 bg-blue border-0' />
      {provider && (
        <ul key={id_prov}>
          <li className='items-left justify-center p-[5%] ml-1 mb-2'>
            <h2 className='text-xl'> Datos:</h2> <br />
            <figure className='float-right h-20 max-w-[6.9em] ml-1'>
              <img
                className='rounded-lg'
                src={`${provider.img}`}
                alt={`${provider.name}`}
              />
            </figure>
            Nombre:<h2 className='ml-5'>{provider.name}</h2>
            Apellido:<h2 className='ml-5'> {provider.lastName}</h2>
          </li>
          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Disponibilidad horaria: </p>
            <p className='p__title'>{provider.horary}</p>
          </li>
          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Certificaciones: </p>
            <p className='p__title'>{provider.horary}</p>
          </li>
          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Trabajos realizados: </p>
            <p className='p__title'> Sin fotos</p>
          </li>
          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Reseñas: </p>
            <p className='p__title'> Sin Reseñas</p>
          </li>
          <hr className='h-0.5 bg-blue border-0' />
          <br />
        </ul>
      )}

      <div className='flex justify-center pb-8'>
        <Link to='/contactRequest'>
          <button className='primaryBtn'>Solicitar Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default Proveedores;
