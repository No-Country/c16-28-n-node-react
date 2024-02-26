export function FormSolicitud() {
    return (
        <div>
            <hr />
            <h1 className="p-[2%] items-center">Solicitud de contacto</h1>
            <form className="flex flex-col gap-4 ml-2  items-center">
                <span>Para el profesional: 
                <input disabled placeholder=" Nombre del prov" /><br/>
                </span>
                <span >
                    Nombre:<br/>
                    <input className="border border-gray rounded-md p-2 ml-5" />
                </span>
                <span >
                    Descripción:<br/>
                    <div className="ml-5">
                        <input className="border border-gray rounded-md p-2 h-32" />
                    </div>
                </span>
                <span className="ml-2">
                    Datos del usuario:</span>
                    <span  className="ml-5">
                    Nombre: <input disabled placeholder="Nombre del user" /><br/>
                    Apellido: <input disabled placeholder="Apellido del user" /><br/>
                    Email: <input disabled placeholder="email del user" />
                </span>
            </form>
            <br/>
            <div className="flex justify-center">
            <button  className='bg-orange px-4 py-2'>Enviar</button>
            </div>
        </div>
    );
}

