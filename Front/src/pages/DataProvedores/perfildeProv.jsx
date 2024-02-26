import { useEffect } from 'react';
import providerStore from '../../store/dataProv';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Proveedores = () => {

  const { provider, loadprovider } = providerStore();
  const { id_prov } = useParams();

  useEffect(() => {
    loadprovider(id_prov);
  }, [id_prov,  loadprovider]);

    return (
      <div >
        <hr className='h-0.5 bg-blue border-0'/>
          {provider && (
            <ul>
            <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2'>
              <h2 className='text-xl'> Datos:</h2> <br/>
          <img className='float-right h-20 max-w-[6.9em] rounded-lg ml-1' src={`${provider.img}`} alt="photo"></img>
              Nombre:<h2 className='ml-5'>{provider.name}</h2>
              Apellido:<h2 className='ml-5'> {provider.lastName}</h2>
    </li>
    <hr className='h-0.5 bg-blue border-0'/>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <h2>Disponibilidad horaria: </h2>
            <h2 style={{ fontSize: '0.9em' } } className='ml-5'>{provider.horary}</h2>
    </li>
    <hr className='h-0.5 bg-blue border-0'/>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <h2>Certificaciones: </h2>
            <h2 style={{ fontSize: '0.9em' }} className='ml-5'>{provider.horary}</h2>
    </li>
    <hr className='h-0.5 bg-blue border-0'/>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <h2>Trabajos realizados: </h2>
            <h2 style={{ fontSize: '0.9em' }} className='ml-5'> Sin fotos</h2>
    </li>
    <hr className='h-0.5 bg-blue border-0'/>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <h2>Reseñas: </h2>
            <h2 style={{ fontSize: '0.9em' }} className='ml-5'> Sin Reseñas</h2>
    </li>
    <hr className='h-0.5 bg-blue border-0'/><br/>
            </ul>
          )}

      <div className="flex justify-center">
        <Link to="/contactRequest">
        <button className='bg-orange px-4 py-2 hover:bg-blue'>Solicitar Contacto</button>
        </Link>
      </div>
</div>
    )
  }
  
  export default Proveedores