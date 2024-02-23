const categoryList = [
  {
    title: 'Plomería',
    image: '../src/assets/icons/plumbing.png',
    alt: 'Icono de plomeria',
  },
  {
    title: 'Limpieza',
    image: '../src/assets/icons/cleaning.png',
    alt: 'Icono de limpieza',
  },
  {
    title: 'Electricidad',
    image: '../src/assets/icons/electricity.png',
    alt: 'Icono de electricidad',
  },
  {
    title: 'Electricidad',
    image: '../src/assets/icons/electricity.png',
    alt: 'Icono de electricidad',
  },
  {
    title: 'Electricidad',
    image: '../src/assets/icons/electricity.png',
    alt: 'Icono de electricidad',
  },
  {
    title: 'Electricidad',
    image: '../src/assets/icons/electricity.png',
    alt: 'Icono de electricidad',
  },
];

const CategoryList = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-auto gap-5'>
      {' '}
      {categoryList.map((category, index) => {
        return (
          <div
            className='flex flex-col items-center justify-center px-3 py-2 rounded-md h-24 w-24 bg-orange'
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
