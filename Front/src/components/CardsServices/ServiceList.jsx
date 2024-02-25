import { useEffect } from 'react';
import useServiceStore from '../../store/services';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ServiceList() {
  const { services, loadServices } = useServiceStore();
  const { id_rubro } = useParams();

  useEffect(() => {
    loadServices(id_rubro);
  }, [id_rubro, loadServices]);

  return (
    <div>
      <h2  className='section__normal items-center justify-center'>Servicios:</h2>
      <ul>
        {services && services.map((services) => (
          <li key={services.id_service} className='items-left justify-center bg-blue-500 hover:bg-blue-700 p-[5%] ml-1 mb-2 border border-black-100 rounded-md'>
            <Link to='/'>{services.name}</Link>
            </li>

        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
