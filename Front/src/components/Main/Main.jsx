import CategoryList from '../CategoryList/CategoryList';

const Main = () => {
  return (
    <div className='container'>
      <main className='max-w-full'>
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
      </main>
    </div>
  );
};

export default Main;
