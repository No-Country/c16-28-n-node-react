import { useEffect } from 'react';
import providerStore from '../../store/dataProv';
import imgServiceStore from "../../store/imgServices";
import useServiceStore from '../../store/services';
import reviewsStore from '../../store/reviews';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BreadcrumbProveedoresDetail } from '../../components/breadcrumb/breadcrumbs';

const Proveedores = () => {
  const { provider, loadprovider } = providerStore();
  const {imgs , loadImgs} = imgServiceStore();
  const {reviews , loadReviews} = reviewsStore();
  const { service } = useServiceStore();
  const { id_prov } = useParams();
  let id_service = service?.id_service;
  
  useEffect(() => {
    loadprovider(id_prov);
    loadReviews(id_prov);
    if (id_service) {
      loadImgs(id_prov, id_service);
    }
  }, [id_prov, loadprovider, loadImgs, id_service, loadReviews]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
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
            Nombre:<h2 className='ml-5'>{provider.name}</h2>
            Apellido:<h2 className='ml-5'> {provider.lastName}</h2>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Disponibilidad horaria: </p>
            <p className='p__title'>{provider.horary}</p>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Matriculacion y certificaciones: </p>
            <p className='p__title'>Matriculacion: {provider.matriculation}</p>
            <p className='p__title'>Certificaciones: {provider.otherCertif}</p>
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Trabajos realizados: </p>
            {imgs.length > 0 ? (
              <Slider {...settings}>
                {imgs.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Imagen ${index}`} className='rounded-lg' />
                  </div>
                ))}
              </Slider>
            ) : (
              <p className='p__title'> No ha cargado fotos aun</p>
            )}
          </li>

          <hr className='h-0.5 bg-blue border-0' />
          <li className='items-left justify-center p-[5%] ml-1 mb-2 '>
            <p className='p__h3'>Reseñas: </p>
            {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  <p>{review.text}</p>
                  <p>Calificación: {review.rating}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className='p__title'>No posee reseñas aún.</p>
          )}
        </li>


          <hr className='h-0.5 bg-blue border-0' />
          <br />
        </ul>
      )}

      <div className='flex justify-center pb-8'>
        <Link to='/contactRequest'>
          <button className='primaryBtn'>Solicitar Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default Proveedores;
