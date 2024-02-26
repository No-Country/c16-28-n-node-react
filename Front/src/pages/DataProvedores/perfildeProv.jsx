import { useEffect } from 'react';
import providerStore from '../../store/dataProv';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const Proveedores = () => {

  const { provider, loadprovider } = providerStore();
  const { id_prov } = useParams();

  useEffect(() => {
    loadprovider(id_prov);
  }, [id_prov,  loadprovider]);

    return (
      <div >
        <NavBar/>
        <br></br>
        <h1 className='ml-2'>Profesional</h1>
        <br></br>
          {provider && (
            <ul>
          <img className='float-right' src={`${provider.img}`} alt="photo"></img>
            <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
              <h1> Datos:</h1> <br/>
              Nombre:<h2 className='ml-5'>{provider.name}</h2>
              Apellido:<h2 className='ml-5'> {provider.lastName}</h2><br/>
    </li>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
            <h2>Disponibilidad horaria: </h2>
            <span >{provider.horary}</span>
    </li>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
            <h2>Certificaciones: </h2>
            <span >{provider.horary}</span>
    </li>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
            <h2>Trabajos realizados: </h2>
            <span> Sin fotos</span>
    </li>
    <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
            <h2>Reseñas: </h2>
            <span> Sin Reseñas</span>
    </li>
            </ul>
          )}

      <div className="flex justify-center">
        <button className='bg-orange px-4 py-2'>Solicitar Contacto</button>
      </div>
</div>
    )
  }
  
  export default Proveedores