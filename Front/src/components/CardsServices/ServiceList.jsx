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
      <h2  className='items-left justify-center p-[5%]'>Servicios:</h2>
      <ul>
        {services && services.map((services) => (
          <li key={services.id_service} className=' justify-center p-[5%] ml-1 mb-2 border border-blue rounded-md hover:bg-orange focus:bg-orange'>
            <Link className='mx-auto p-[5%]' to={`/providers/${services.id_service}`}>
              {services.name}
            </Link>
            </li>

        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
