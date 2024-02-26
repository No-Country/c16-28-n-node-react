import { useEffect } from 'react';
import providerStore from '../../store/providers';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProvidersList() {
  const { providersDetails, loadProviders } = providerStore();
  const { id_service } = useParams();

  useEffect(() => {
    loadProviders(id_service);
  }, [id_service, loadProviders]);

  return (
    <div>
      <h2  className='items-left justify-center p-[5%]'>Profesionales:</h2>
      <ul>
        {providersDetails && Object.keys(providersDetails).map((id_prov) => (
            <li key={id_prov} className='items-left justify-center ml-1 mb-4 border border-blue rounded-md hover:bg-orange'>
            <Link className='mx-auto' to={`/providers/data/${providersDetails[id_prov].id_prov}`}>
            <img className='float-right w-19 h-16 max-w-[5em] rounded-lg mt-1.5 mr-2' src={`${providersDetails[id_prov].img}`} alt="photo"></img>
            <h3 className='py-0.5 ml-2'>{providersDetails[id_prov].name}</h3>
            <h3 className='py-0.5 ml-3'style={{ fontSize: '0.9em' }}> {providersDetails[id_prov].lastName}</h3>
            <h3 className='py-0.5 ml-3'style={{ fontSize: '0.7em' }}>Disponibilidad: {providersDetails[id_prov].horary}</h3>
    </Link>
</li>
        ))}
      </ul>
    </div>
  );
}

export default ProvidersList;
