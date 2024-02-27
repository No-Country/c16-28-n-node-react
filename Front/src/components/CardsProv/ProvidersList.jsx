import { useEffect, useState } from 'react';
import providerStore from '../../store/providers';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProvidersList() {
  const { providersDetails, loadProviders, resetProviders } = providerStore();
  const { id_service } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProviders(id_service).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
    return () => {
      resetProviders();
    };
  }, [id_service, loadProviders, resetProviders]);

  if (loading) {
    return <img src="https://registration.gjepc.org/images/formloader.gif"/>;  //cambiar loader
  }

  return (
    <div>
      {Object.keys(providersDetails).length === 0 ? (
        <div className='flex justify-center items-center'>
          <div className='text-center'>
          <h2 className='items-left justify-center p-[5%]'>Profesionales:</h2>
            <img className='h-20 max-w-[6.9em] mx-auto' src="https://cdn-icons-png.flaticon.com/512/2274/2274455.png" alt="" /> <br/>
            <p className="text-blue text-xl">Actualmente no hay proveedores disponibles.</p> <br/>
            <button className='primaryBtn' onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='items-left justify-center p-[5%]'>Profesionales:</h2>
          <ul>
            {Object.keys(providersDetails).map((id_prov) => (
              <li key={id_prov} className='items-left justify-center ml-1 mb-4 border border-blue rounded-md hover:bg-orange'>
                <Link className='mx-auto' to={`/providers/data/${providersDetails[id_prov].id_prov}`}>
                  <img className='float-right w-19 h-16 max-w-[5em] rounded-lg mt-1.5 mr-2' src={`${providersDetails[id_prov].img}`} alt="photo"></img>
                  <h3 className='py-0.5 ml-2'>{providersDetails[id_prov].name}</h3>
                  <h3 className='py-0.5 ml-3' style={{ fontSize: '0.9em' }}> {providersDetails[id_prov].lastName}</h3>
                  <h3 className='py-0.5 ml-3' style={{ fontSize: '0.7em' }}>Disponibilidad: {providersDetails[id_prov].horary}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProvidersList;