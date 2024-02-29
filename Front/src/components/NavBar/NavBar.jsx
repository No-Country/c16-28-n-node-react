import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/auth";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const { token, logout } = useUserStore();
  const navigate= useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('¡Has cerrado sesión exitosamente!');
    navigate("/");
  };

  return (
    <nav className='bg-slate-800 w-full text-white'>
      <ul className='flex justify-center items-center gap-6 p-3'>
        <li>Home</li>
        { !token ? (
         <li><Link to ="/login">Log in</Link></li>
        ):(
          <div className='flex justify-center items-center gap-6 p-3'>
            <li>
              {/* <Link to ="/per"> */}
                Perfil
                {/* </Link> */}
            </li>
            <li onClick={handleLogout} >Log out</li>
          </div>
        )}
      </ul>
      <div className='m-6 bg-yellow w-[125px] h-[54px] flex items-center justify-center'>
        <Link to={'/'} className='font-sans text-xl font-bold text-center text-blue'>
          ServiApp
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
