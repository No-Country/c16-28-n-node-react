import { useNavigate } from 'react-router-dom';
import "./bread.css"

export const BreadcrumbProveedores = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='bread'>
      <ul>
        <li onClick={() => navigate("/")}>Inicio</li> <p>→</p>
        <li onClick={goBack}>Servicios</li>
      </ul>
    </div>
  );
};

export const BreadcrumbServicios = () => {
    const navigate = useNavigate();
  
    return (
      <div className='bread'>
        <ul>
          <li onClick={() => navigate("/")}>Inicio</li>
        </ul>
      </div>
    );
};

export const BreadcrumbProveedoresDetail = () => {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1); 
    };
    const goBack2 = () => {
        navigate(-2); 
      };
  
    return (
      <div className='bread'>
        <ul>
          <li onClick={() => navigate("/")}>Inicio</li><p>→</p>
          <li onClick={goBack2}>Servicios</li><p>→</p>
          <li onClick={goBack}>Profesionales</li>
        </ul>
      </div>
    );
};
