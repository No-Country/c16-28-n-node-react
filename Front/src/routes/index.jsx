import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Proveedores from '../pages/Proveedores/Proveedores';
import PerfilProveedor from '../pages/PerfilProveedor/PerfilProveedor';
import Login from '../pages/Login/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/proveedores' element={<Proveedores />} />
      <Route path='/proveedor/perfil/:id' element={<PerfilProveedor />} />
    </Routes>
  );
};

export default AppRoutes;
