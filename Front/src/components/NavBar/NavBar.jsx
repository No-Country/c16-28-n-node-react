import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../../store/auth';
import { toast } from 'react-hot-toast';
import Sidebar from '../Sidebar/Sidebar';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const { logout } = useUserStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('¡Has cerrado sesión exitosamente!');
    navigate('/');
    setMenuOpen(!menuOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='flex justify-between items-center border-b border-dark/10 shadow-sm p-2'>
      <div className='flex items-center'>
        <Link to={'/'}>
          <figure className='w-[200px] h-auto'>
            <img
              src='https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png'
              alt='ServiApp Logo'
            />
          </figure>
        </Link>
      </div>

      <div className='flex items-center'>
        <Menu onClick={handleMenuToggle} className='cursor-pointer' />
      </div>

      {menuOpen && (
        <div className='relative '>
          <div
            className='relative pb-8
          '
          ></div>

          <Sidebar handleMenuToggle={handleMenuToggle} logout={handleLogout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
