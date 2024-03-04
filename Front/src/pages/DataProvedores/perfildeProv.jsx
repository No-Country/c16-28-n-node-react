import { useEffect, useState} from 'react';
import providerStore from '../../store/dataProv';
import imgServiceStore from "../../store/imgServices";
import useUserStore from '../../store/auth';
import reviewsStore from '../../store/reviews';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BreadcrumbProveedoresDetail } from '../../components/breadcrumb/breadcrumbs';
import { useNavigate } from 'react-router-dom';


const Proveedores = () => {
  const { provider, loadprovider } = providerStore();
  const {imgs , loadImgs , resetImgs} = imgServiceStore();
  const {reviews , loadReviews, resetReviews} = reviewsStore();
  const { id_prov , id_service } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { token } = useUserStore(); 

  
  useEffect(() => {
    loadprovider(id_prov).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
    loadReviews(id_prov);
    loadImgs(id_prov, id_service);
  
    return () => {
      resetImgs();
      resetReviews();
    };
  }, [id_prov, loadprovider, loadImgs, id_service, loadReviews, resetImgs, resetReviews]);


if (loading) {
  return <img src="https://registration.gjepc.org/images/formloader.gif"/>;  //cambiar loader
}


  const handleSolicitarContacto = () => {
    if (!token) {
      alert('Debe iniciar sesión para solicitar contacto');
      navigate('/login'); 
    }
    else{
      navigate("/contactRequest")
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <div>
      <BreadcrumbProveedoresDetail/>
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
            Nombre:<h2 className='ml-7'>{provider.name}</h2>
            Apellido:<h2 className='ml-7'> {provider.lastName}</h2>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Disponibilidad horaria: </p>
            <p className='p__title'>{provider.horary}</p>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Matriculación y certificaciones: </p>
            <p className='p__title'><strong>Matriculación:</strong> {provider.matriculation}</p>
            <p className='p__title'><strong>Certificaciones:</strong> {provider.otherCertif}</p>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Trabajos realizados: </p>
            {imgs.length > 0 ? (
              imgs.length === 1 || imgs.length === 2 ? (
                <div>
                  <img src={imgs[0].url} alt={``} className='rounded-lg max-w-[9.1em]' />
                </div>
              ) : (
                <Slider {...settings}>
                  {imgs.map((image, index) => (
                    <div key={index}>
                      <img src={image.url} alt={`Imagen ${index}`} className='rounded-lg h-100 max-w-140 m-auto' key={index}/>
                    </div>
                  ))}
                </Slider>
              )
            ) : (
              <p className='p__title'> No ha cargado fotos aun</p>
            )}
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Reseñas: </p>
            {reviews.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
  {reviews.map((review, index) => (
        <div key={index} className="border border-skyBlue rounded-lg text-white text-center p-4">
        {Array.from({ length: review.score }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <p>{review.description}</p>
        </div>
  ))}
</div>
          ) : (
            <p className='p__title'>No posee reseñas aún.</p>
          )}
        </li>


          <hr className='h-0.5 bg-blue border-0' />
          <br />
        </ul>
      )}

<div className='flex justify-center pb-8'>
        <button className='primaryBtn' onClick={handleSolicitarContacto}>Solicitar Contacto</button>
      </div>
    </div>
  );
};

export default Proveedores;
