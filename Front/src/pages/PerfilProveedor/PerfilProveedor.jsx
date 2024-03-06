import { useEffect } from 'react';
import useUserStore from '../../store/auth';
import userStore from '../../store/users';
import { useNavigate } from 'react-router-dom';

const PerfilProveedor = () => {
  const loadUserById = userStore((state) => state.loadUserById);
  console.log(loadUserById)
  const { user} = userStore();
  console.log(user)
  // const { id_user } = useParams();
  const { token ,id } = useUserStore();
  const navigate = useNavigate()

  useEffect(() => {
    loadUserById(id);
      if (!token) {
        navigate('/login')
      }
  }, [token, id, loadUserById]);
  return (
    <div className='bg-white p-8 rounded-md'>
      
   <div className='text-left mb-3'>
      <button className='text-xl' onClick={() => navigate(-1)}>
        <img className='max-w-8 inline-block' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243588/icons/wtqujikl54gs3gquo6vv.png" alt="<"/>
        Volver
      </button>
      </div> 
      <br/>
  <div className='ml-5'>
      <h2 className='font-bold text-xl'>Mi Perfil</h2>  
      </div>
      <br/>

      <div className='mt-5 flex flex-col items-center'>
        <ul>
          <li className='mt-4 w-[16em] font-bold'> 
            <img className='max-w-7 inline-block mr-5' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243588/icons/hk1foubdljk2x1yh1do3.png" alt=""/>
              Configuración
              <img  className='max-w-9 float-right' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709245960/icons/flk7jjpkiirnwpfy1bve.png" alt=">"/>
            </li>
          <li className='mt-4 w-[16em] font-bold'>
            <img className='max-w-7 inline-block mr-4' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243588/icons/xszqem8doqn60pgesxjm.png" alt=""/>
            Notificaciones
            <img className='max-w-9 float-right' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709245960/icons/flk7jjpkiirnwpfy1bve.png" alt=">"/>
          </li>
          <li className='mt-4 w-[16em] font-bold'>
            <img className='max-w-7 inline-block mr-4' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/f59ph5og437m7c39ic4m.png" alt=""/>
            Contacto
            <img className='max-w-9 float-right'  src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709245960/icons/flk7jjpkiirnwpfy1bve.png" alt=">"/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PerfilProveedor