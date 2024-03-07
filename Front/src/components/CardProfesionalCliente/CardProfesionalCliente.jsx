const CardProfesionalCliente = ({titulo, texto, imagen}) => {
  return (
    <>
      <div className='section__normal'>
        <h2 className='text-xl font-semibold'> {titulo} </h2>
        <p className='text-left w-auto'>
          {texto}
        </p>
      </div>
      <div
        className='bg-cover bg-center'
        style={{
          backgroundImage: `url(${imagen})`,
          height: '203px',
        }}
      ></div>
    </>
  );
};

export default CardProfesionalCliente;
