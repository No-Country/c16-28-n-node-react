import { Routes, Route , Navigate} from 'react-router-dom';
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
import useUserStore from '../store/auth';


const AppRoutes = () => {

  const { role } = useUserStore();

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
      { role === "user" &&(
        <>
          <Route path='/contactRequest' element={<Solicitud/>} />
          <Route path='/usuario/perfil' element={<PerfilCliente/>} />
          <Route path='/ListaDeSolicitedes' element={""} />
        </>
      )}
      { role === "provider" &&(
        <>
      <Route path='/proveedores' element={<Proveedores />} />
      <Route path='/proveedor/perfil' element={<PerfilProveedor />} />
      <Route path='/servicios' element={""} />
      <Route path='/solicitudes' element={""} />
        </>
      )}
      <Route path="*" element={
          role !== 'user' && role !== 'prov' ? (
            <Navigate to="/" />
          ) : null
        }
      />
    </Routes>
  );
};

export default AppRoutes;
