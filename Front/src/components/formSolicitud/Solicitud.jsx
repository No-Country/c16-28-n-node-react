import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCacheStore from "../../store/solicitud";
import useUserStore from "../../store/auth";
import userStore from "../../store/users";
import configureAxios from "../../api/axios";
import { toast } from "react-hot-toast";

export function FormSolicitud() {
  const loadUserById = userStore((state) => state.loadUserById);
  const { id_service, provider_data } = useCacheStore();
  const { id } = useUserStore();
  const { user } = userStore();

  const navigate = useNavigate();
  const api = configureAxios();

  const [dataSolicitud, setDataSolicitud] = useState({
    id_prov: provider_data.id_prov,
    id_service: parseInt(id_service, 10),
    id_user: id,
    name: "",
    description: "",
  });

  const envioData = async (data) => {
    try {
      await api.post("/solicited/post", data);
      toast.success("La solicitud fue enviada correctamente. Puede visualizar su estado en 'Listado de solicitudes'");
      navigate("/");
    } catch (error) {
      toast.error("Ooops algo ha salido mal, vuelve a intentarlo");
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserById(id);
  }, [id, loadUserById]);

  const handleSolicitar = async (e) => {
    e.preventDefault();
    await envioData(dataSolicitud);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSolicitud((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <hr />
      <h1 className="p-[2%] items-center">Solicitud de contacto</h1>
      {user ? (
        <form
          className="flex flex-col gap-4 ml-2  items-center"
          onSubmit={handleSolicitar}
        >
          <h2>Para el profesional:</h2>
          <input
            className="align-middle mb-2"
            disabled
            placeholder={`${provider_data.name}, ${provider_data.lastName}`}
          />
          <span>
            Nombre:<br />
            <input
              onChange={handleChange}
              value={dataSolicitud.name}
              name="name"
              className="border border-gray rounded-md p-2 ml-5"
              placeholder="Nombre de la solicitud"
            />
          </span>
          <span>
            Descripción:<br />
            <div className="ml-5">
              <textarea
                value={dataSolicitud.description}
                onChange={handleChange}
                name="description"
                className="border border-gray rounded-md ml-1"
                rows="8"
                cols="27"
                placeholder="Describir solicitud"
              ></textarea>
            </div>
          </span>
          <h2 className="ml-2">Datos del usuario:</h2>
          <span className="ml-5">
            Nombre: <input disabled placeholder={`${user.name}`} />
            <br />
            Apellido: <input disabled placeholder={`${user.lastName}`} />
            <br />
            Email: <input disabled placeholder={`${user.email}`} />
          </span>
          <button
            className="bg-orange px-4 py-2 border border-black rounded-md"
            type="submit"
          >
            Enviar
          </button>
        </form>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
}
