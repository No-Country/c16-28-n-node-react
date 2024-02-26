import { Routes, Route } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Proveedores from '../pages/Proveedores/Proveedores';
import PerfilProveedor from '../pages/PerfilProveedor/PerfilProveedor';
import Login from '../pages/Login/Login';
import Services from "../pages/MenúServicio/Servicios";
import Providers from "../pages/MenuProveedores/ListProv";
import DataProvider from "../pages/DataProvedores/perfildeProv";
import Home from '../pages/home/Home';
import ConfirmationPage from '../pages/ConfirmationPage/ConfirmationPage';
import Solicitud from '../pages/Solicitud de Contacto/Solicitud';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/services/:id_rubro' element={<Services/>} />
      <Route path='/providers/:id_service' element={<Providers/>} />
      <Route path='/providers/data/:id_prov' element={<DataProvider/>} />
      <Route path='/contactRequest' element={<Solicitud/>} />
      <Route path='confirmation-page' element={<ConfirmationPage />} />
      <Route path='/proveedores' element={<Proveedores />} />
      <Route path='/proveedor/perfil/:id' element={<PerfilProveedor />} />
    </Routes>
  );
};

export default AppRoutes;
