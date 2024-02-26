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
      <h2 className='section__normal items-center justify-center'>Profesionales:</h2>
      <ul>
        {providersDetails && Object.keys(providersDetails).map((id_prov) => (
            <li key={id_prov} className='items-left justify-center p-[5%] ml-1 mb-2 border border-gray-100 rounded-md'>
            <Link to={`/providers/data/${providersDetails[id_prov].id_prov}`}>
            <span>{providersDetails[id_prov].name}</span><br />
            <span style={{ fontSize: '0.8em' }}> {providersDetails[id_prov].lastName}</span><br />
            <span style={{ fontSize: '0.6em' }}>Disponibilidad: {providersDetails[id_prov].horary}</span>
        <img className='float-right' src={`${providersDetails[id_prov].img}`} alt="photo"></img>
    </Link>
</li>
        ))}
      </ul>
    </div>
  );
}

export default ProvidersList;
