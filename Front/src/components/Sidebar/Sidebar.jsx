import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  CircleUserRound,
  SearchCheck,
  LogIn,
  LogOut,
  BadgePlus,
} from 'lucide-react';
import useUserStore from '../../store/auth';
import userStore from '../../store/users';
import providerStore from '../../store/providers';

const Sidebar = ({ handleMenuToggle, logout }) => {
  const { role, id } = useUserStore();
  const { user, loadUserById } = userStore();
  const { providersDetails, getProviderByIdProv } = providerStore();

  useEffect(() => {
    if (id) {
      loadUserById(id);
      getProviderByIdProv(id);
    }
  }, [id, loadUserById, getProviderByIdProv]);

  const getInitials = (name, lastName) => {
    if (!name) return '';
    const firstNameInitial = name.charAt(0);
    const lastNameInitial = lastName ? lastName.charAt(0) : '';
    return `${firstNameInitial}${lastNameInitial}`;
  };

  return (
    <aside className='relative min-h-screen p-4 flex flex-col justify-between'>
      <div>
        <ul className='flex flex-col gap-y-4' onClick={handleMenuToggle}>
          <Link to='/'>
            <li className='flex items-center justify-start gap-1'>
              <Home size={20} />
              Inicio
            </li>
          </Link>
          {role === 'user' && (
            <Link to='/usuario/perfil'>
              <li className='flex items-center justify-start gap-1'>
                <CircleUserRound size={20} />
                Perfil
              </li>
            </Link>
          )}
          {role === 'provider' && (
            <Link to='/proveedor/perfil'>
              <li className='flex items-center justify-start gap-1'>
                <CircleUserRound size={20} />
                Perfil
              </li>
            </Link>
          )}
          {role === 'user' && (
            <Link to='/search'>
              <li className='flex items-center justify-start gap-1'>
                <SearchCheck size={20} />
                Buscar Profesionales
              </li>
            </Link>
          )}

          {!role ? (
            <>
              <Link to='/login'>
                <li className='flex items-center justify-start gap-1'>
                  <LogIn size={20} />
                  Login
                </li>
              </Link>
              <Link to='/register/user'>
                <li className='flex items-center justify-start gap-1'>
                  <BadgePlus size={20} />
                  Regístrate
                </li>
              </Link>
            </>
          ) : (
            <Link onClick={logout}>
              <li className='flex items-center justify-start gap-1'>
                <LogOut size={20} />
                Log out
              </li>
            </Link>
          )}
        </ul>
      </div>
      <div>
        {role === 'user' ? (
          <div className='w-full flex items-center justify-center pb-12'>
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className='w-12 h-12 rounded-full'
              />
            ) : (
              <div className='w-12 h-12 flex items-center justify-center bg-skyBlue text-white rounded-full p-2'>
                <span className='font-semibold'>
                  {getInitials(
                    user ? user.name : '',
                    user ? user.lastName : ''
                  )}
                </span>
              </div>
            )}
            <div className='flex flex-col items-start p-2'>
              <span className='text-sm font-semibold'>
                {user.name} {user.lastName}
              </span>
              <span className='text-sm'>{user.email}</span>
            </div>
          </div>
        ) : (
          role === 'provider' && (
            <Link to={'/proveedor/perfil'} onClick={handleMenuToggle}>
              <div className='w-full flex items-center justify-center pb-12'>
                {providersDetails.img ? (
                  <img
                    src={providersDetails.img}
                    alt={providersDetails.name}
                    className='w-12 h-12 rounded-full object-cover'
                  />
                ) : (
                  <div className='w-12 h-12 flex items-center justify-center bg-skyBlue text-white rounded-full p-2'>
                    <span className='font-semibold'>
                      {getInitials(
                        providersDetails ? providersDetails.name : '',
                        providersDetails ? providersDetails.lastName : ''
                      )}
                    </span>
                  </div>
                )}
                <div className='flex flex-col items-start p-2'>
                  <span className='text-sm font-semibold'>
                    {providersDetails.name} {providersDetails.lastName}
                  </span>
                  <span className='text-sm'>{providersDetails.email}</span>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
