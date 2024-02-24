import { Link } from 'react-router-dom';
import CardProfesionalCliente from '../CardProfesionalCliente/CardProfesionalCliente';
import CategoryList from '../CategoryList/CategoryList';

const MainHome = () => {
  return (
    <div className='container'>
      <section className='max-w-full'>
        <div className='m-6 bg-yellow w-[125px] h-[54px] flex items-center justify-center'>
          <p className='font-sans text-xl font-bold text-center text-blue'>
            ServiApp
          </p>
        </div>
        <section className='container mx-auto section__skyblue'>
          <div className='flex flex-col space-y-[32px]'>
            <h1>
              Olvídate de las reparaciones: Encuentra profesionales de confianza
              en Serviapp
            </h1>
            <p>
              ServiApp es una plataforma que te conecta con profesionales de
              confianza para satisfacer tus necesidades de servicios en el
              hogar.
            </p>
          </div>
          <div className='flex flex-col space-y-[32px]'>
            <h2>Busca por Categorías</h2>
            <CategoryList />
          </div>
        </section>
        <section className='min-h-screen flex flex-col space-y-[32px]'>
          <CardProfesionalCliente
            titulo='Encuentra Profesionales'
            texto='Con solo unos clics, podrás contratar a los mejores expertos para tus necesidades de servicios en el hogar con ServiApp'
            imagen='../../src/assets/images/cliente.webp'
          />
          <CardProfesionalCliente
            titulo='¿Eres un profesional?'
            texto='Únete a ServiApp y muestra tus habilidades al mundo. Carga fotos de tus proyectos, destaca tus certificaciones y comienza a recibir solicitudes de servicio hoy mismo'
            imagen='../../src/assets/images/profesional.webp'
          />
        </section>
        <section className='section__normal items-center justify-center'>
          <Link to={'/login'} className='primaryBtn w-[280px]'>Inicia Sesion</Link>
          <div className='flex flex-col'>
            <span className='text-gray text-sm'>¿No estás registrado?</span>
            <Link to={'/register'} className='secondaryBtn'>
              Regístrate
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainHome;
