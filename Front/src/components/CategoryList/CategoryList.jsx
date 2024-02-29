import { useEffect } from 'react';
import rubroStore from '../../store/rubros'; 
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const { rubros, loadRubros, resetRubros } = rubroStore(); 

  useEffect(() => {
    loadRubros(); 
    return () => {
      resetRubros();
    };
  }, [loadRubros, resetRubros]);

  return (
    <div className='flex flex-wrap w-full items-center justify-center gap-5'>
      {rubros && rubros.map((rubro) => {
        return (
          <div
            className='flex flex-col items-center justify-center px-3 py-2 rounded-md h-20 w-20 bg-orange'
            key={rubro.id_rubro}
          >
            <Link to={`/services/${rubro.id_rubro}`}>
              <h3 className='text-[12px]'>{rubro.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
