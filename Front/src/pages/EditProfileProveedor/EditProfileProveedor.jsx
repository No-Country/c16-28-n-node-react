import { useEffect } from 'react';
import useUserStore from '../../store/auth';
import userStore from '../../store/users';
import { useNavigate } from 'react-router-dom';

const EditProfileProveedor = () => {
    const loadUserById = userStore((state) => state.loadUserById);
    console.log(loadUserById)
    const { user } = userStore();
    console.log(user)
    // const { id_user } = useParams();
    const { token, id } = useUserStore();
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
                    <img className='max-w-8 inline-block' src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243588/icons/wtqujikl54gs3gquo6vv.png" alt="<" />
                    Volver
                </button>
            </div>
            <section>
                <div className='flex justify-between items-center'>
                    <h2>Foto de perfil</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M1 3h22L12 22" /></svg>
                </div>
                <div className='flex flex-col items-center m-5 gap-2'>
                    <div className="flex justify-center items-center opacity-50 w-[250px] h-[150px] border rounded-md border-black ml-3 mr-4 float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <span>Editar foto de perfil</span>
                </div>

            </section>
            <section>
                <div className='flex justify-between items-center mt-12'>
                    <h2>Información personal</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M1 3h22L12 22" /></svg>
                </div>

                <div className='flex flex-col m-2 gap-3'>
                    <div className='flex flex-col'>

                        <span className='text-sm'>Nombre y Apellido</span>
                        <input className='bg-gray-200 p-2 rounded-lg' type="text" value={`${user.name} ${user.lastName}`} />
                    </div>
                    <div className='flex flex-col'>

                        <span className='text-sm'>Correo Electrónico</span>
                        <input className='bg-gray-200 p-2 rounded-lg' type="text" value={user.email} />
                    </div>
                    <div className='flex flex-col'>

                        <span className='text-sm'>Contraseña</span>
                        <input className='bg-gray-200 p-2 rounded-lg' type="text" value={user.password} />
                    </div>
                    <div className='flex flex-col'>

                        <span className='text-sm'>Contacto</span>
                        <input className='bg-gray-200 p-2 rounded-lg' type="text" value={user.contact} />
                    </div>
                </div>
            </section>

            <section>
                <div className='flex justify-between items-center mt-12'>
                    <h2>Sobre tus servicios</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M1 3h22L12 22" /></svg>
                </div>
                <div className='flex flex-col m-2 gap-3'>
                <div className='flex flex-col'>

                    <span className='text-sm'>Tu servicio  <span className='text-red text-lg'>*</span></span>
                    <select className='bg-gray-200 p-2 rounded-lg' type="text" value={user.contact}>
                    <option>Seleccionar</option>
                    </select>
                </div>
                <div className='flex flex-col'>

                    <span className='text-sm'>Tu servicio <span className='text-red text-lg'>*</span></span>
                    <textarea className='h-[200px] bg-gray-200 p-2 rounded-lg' type="text" value={user.contact} placeholder='Describe tu servicio aquí...'>
                    
                    </textarea>
                    <span className='text-red text-sm m-1'>Debe completar esta carga.</span>
                </div>
                <div className='flex flex-col gap-1'>

                    <span className='text-sm'>Fotos</span>
                    <div className='flex flex-col justify-center items-center bg-[#e2e2e2] rounded-lg p-6'>
                        <span className='text-sm w-full justify-start pl-2'>Arrastra y suelta la imágenes...</span>
                    <div className='grid grid-cols-3 items-center gap-3 m-2'>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black  float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black  float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black  float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black  float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    <div className="flex justify-center items-center opacity-50 w-[66px] h-[66px] border rounded-md border-black  float-left" src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709243587/icons/hk8cvwizjvwsf3qqj0ll.png">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 256 256"><path fill="#000000" d="M208 52h-25.58L170 33.34A12 12 0 0 0 160 28H96a12 12 0 0 0-10 5.34L73.57 52H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h32a12 12 0 0 0 10-5.34L102.42 52h51.15L166 70.66A12 12 0 0 0 176 76h32a4 4 0 0 1 4 4ZM128 84a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24" /></svg>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>

                    <span className='text-sm'>Matriculas</span>
                    <textarea className='h-[200px] bg-gray-200 p-2 rounded-lg' type="text" value={user.contact} placeholder='Coloca aquí tu número de matricula o certificación  de servicios...'>
                    
                    </textarea>
                </div>
                <div className='flex flex-col gap-1'>

                    <span className='text-sm'>Otras certificaciones</span>
                    <textarea className='h-[200px] bg-gray-200 p-2 rounded-lg' type="text" value={user.contact} placeholder='Coloca aquí otras certificaciones...'>
                    
                    </textarea>
                </div>
                </div>
            </section>
            <div className='flex justify-center items-center mt-12'>

            <button className='btnProviders w-10/12' to={'/register/provider'}>
          Guardar información
        </button>
            </div>
        </div>
    )
}

export default EditProfileProveedor