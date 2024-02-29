import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Proveedores from '../pages/Proveedores/Proveedores';
import PerfilProveedor from '../pages/PerfilProveedor/PerfilProveedor';
import Login from '../pages/Login/Login';
import Services from '../pages/MenúServicio/Servicios';
import Providers from '../pages/MenuProveedores/ListProv';
import DataProvider from '../pages/DataProvedores/perfildeProv';
import Home from '../pages/Home/Home';
import ConfirmationPage from '../pages/ConfirmationPage/ConfirmationPage';
import Solicitud from '../pages/Solicitud de Contacto/Solicitud';
import PerfilCliente from '../pages/PerfilCliente/PerfilCliente';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/users/:id_user' element={<PerfilCliente />} />
      <Route path='/register/user' element={<RegisterPage />} />
      <Route path='/register/provider' element={<RegisterPage />} />
      <Route path='/services/:id_rubro' element={<Services />} />
      <Route path='/providers/:id_service' element={<Providers />} />
      <Route path='/providers/data/:id_prov' element={<DataProvider />} />
      <Route path='/contactRequest' element={<Solicitud />} />
      <Route path='confirmation-user-page' element={<ConfirmationPage />} />
      <Route path='confirmation-provider-page' element={<ConfirmationPage />} />
      <Route path='/proveedores' element={<Proveedores />} />
      <Route path='/proveedor/perfil/:id_user' element={<PerfilProveedor />} />
    </Routes>
  );
};

export default AppRoutes;
