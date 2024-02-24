const categoryList = [
  {
    title: 'Plomería',
    image: '../src/assets/plumbing.png',
    alt: 'Icono de plomeria',
  },
  {
    title: 'Limpieza',
    image: '../src/assets/cleaning.png',
    alt: 'Icono de limpieza',
  },
  {
    title: 'Electricidad',
    image: '../src/assets/electricity.png',
    alt: 'Icono de electricidad',
  },
  {
    title: 'Carpintería',
    image: '../src/assets/carpentry.png',
    alt: 'Icono de una cierra',
  },
  {
    title: 'Mudanzas',
    image: '../src/assets/truck.png',
    alt: 'Icono de camión',
  },
  {
    title: 'Pintores',
    image: '../src/assets/tabler_paint.png',
    alt: 'Icono de pintores',
  },
];

const CategoryList = () => {
  return (
    <div className='flex flex-wrap w-full items-center justify-center  gap-5'>
      {' '}
      {categoryList.map((category, index) => {
        return (
          <div
            className='flex flex-col items-center justify-center px-3 py-2 rounded-md h-20 w-20 bg-orange'
            key={index}
            data={category}
          >
            <img src={category.image} alt={category.alt} />
            <h3 className='text-[12px]'>{category.title}</h3>
          </div>
        );
      })}{' '}
    </div>
  );
};

export default CategoryList;
