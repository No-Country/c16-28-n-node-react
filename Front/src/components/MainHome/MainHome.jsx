import { Link } from 'react-router-dom';
import CardProfesionalCliente from '../CardProfesionalCliente/CardProfesionalCliente';
import CategoryList from '../CategoryList/CategoryList';

const MainHome = () => {
  return (
    <section className='max-w-full'>
      <section className='container mx-auto section__skyblue'>
        <div className='flex flex-col space-y-[32px]'>
          <h1>
            Olvídate de las reparaciones: Encuentra profesionales de confianza
            en Serviapp
          </h1>
          <p>
            ServiApp es una plataforma que te conecta con profesionales de
            confianza para satisfacer tus necesidades de servicios en el hogar.
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
          imagen='https://res.cloudinary.com/dq9icw8vb/image/upload/v1709240920/vwhhyzefnz1o9gtui0dy.webp'
        />
        <CardProfesionalCliente
          titulo='¿Eres un profesional?'
          texto='Únete a ServiApp y muestra tus habilidades al mundo. Carga fotos de tus proyectos, destaca tus certificaciones y comienza a recibir solicitudes de servicio hoy mismo'
          imagen='https://res.cloudinary.com/dq9icw8vb/image/upload/v1709240702/nuga9m0o0wk9c0l1yl7x.webp'
        />
      </section>
      <section className='section__normal items-center justify-center'>
        <Link to={'/login'} className='primaryBtn w-[280px]'>
          Inicia Sesion
        </Link>
        <div className='flex flex-col'>
          <span className='text-gray text-sm'>¿No estás registrado?</span>
          <Link to={'/register/user'} className='secondaryBtn'>
            Regístrate
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MainHome;
