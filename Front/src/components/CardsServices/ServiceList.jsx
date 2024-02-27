import { useEffect, useState } from 'react';
import useServiceStore from '../../store/services';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ServiceList() {
  const { services, loadServices, resetServices } = useServiceStore();
  const { id_rubro } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadServices(id_rubro).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
    return () => {
      resetServices();
    };
  }, [id_rubro, loadServices, resetServices]);

  if (loading) {
    return <img src="https://registration.gjepc.org/images/formloader.gif"/>;  //cambiar loader
  }

  if (!services || services.length === 0) {
    return (
      <div className='flex justify-center items-center'>
        <div className='text-center'>
          <img className='h-20 max-w-[6.9em] mx-auto' src="https://cdn-icons-png.flaticon.com/512/2274/2274455.png" alt="" /> <br/>
          <p className="text-blue text-xl">Actualmente no hay servicios disponibles.</p> <br/>
          <button className='primaryBtn' onClick={() => navigate('/')}>Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className='items-left justify-center p-[5%]'>Servicios:</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id_service} className='justify-center p-[5%] ml-1 mb-2 border border-blue rounded-md hover:bg-orange focus:bg-orange'>
            <Link className='mx-auto p-[5%]' to={`/providers/${service.id_service}`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;