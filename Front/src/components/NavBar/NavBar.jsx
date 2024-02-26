import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='bg-slate-800 w-full text-white'>
      <ul className='flex justify-center items-center gap-6 p-3'>
        <li>Home</li>
        <li>Search</li>
        <li>Profile</li>
      </ul>
      <div className='m-6 bg-yellow w-[125px] h-[54px] flex items-center justify-center'>
        <Link to={'/'} className='font-sans text-xl font-bold text-center text-blue'>
          ServiApp
        </Link>
      </div>
    </nav>
  );
}

export default NavBar