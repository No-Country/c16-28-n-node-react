import { useState } from 'react';
import { Link } from "react-router-dom"

const LoginForm = () => {
    // Estado para correo electrónico y contraseña
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [errorResponse, setErrorResponse] = useState("");
    
    // Manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrorResponse("");
  
      // Validar correo electrónico y contraseña

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorResponse("Correo electrónico inválido");
        return;
      }
    
      // Validate password (consider stronger validation rules)
      if (formData.password.length < 8) {
        setErrorResponse("Debe tener al menos 8 caracteres");
        return;
      }
  
      // Enviar datos de inicio de sesión
      const { email, password } = formData;
      const loginData = { email, password };
      login(loginData); // Reemplazar con la función de login
      console.log(loginData);
    };
     
    // Manejar cambios de entrada de formulario
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <div>
        <form className="flex flex-col rounded border p-4 gap-6"
          onSubmit={handleSubmit}
        >
            <div className="flex flex-col">          
                <label 
                    htmlFor="email" 
                    className="mb-2 text-text text-black">Correo Electrónico <span className="text-text font-light text-red">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background p-3 rounded border text-text text-gray"
                    placeholder="Escribe tu correo..."
                />
                {!errorResponse && <div className="text-text text-red font-medium">{errorResponse}</div>}
            </div>
            <div className="flex flex-col">          
                <label 
                    htmlFor="password"
                    className="mb-2 text-text text-black"
                >Contraseña <span className="text-text font-light text-red">*</span>
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-background p-3 rounded border text-text text-gray"
                    placeholder="Escribe tu contraseña..."
                />
                {!errorResponse && <div className="text-text text-red font-medium">{errorResponse}</div>}
            </div>
            <div className="pb-0.5 self-center border-b border-black border-1">
            <Link to={'#'} className="text-text text-center text-dark">¿Olvidaste tu contraseña?</Link>
            </div>
            <button 
                type="submit"
                className="bg-yellow p-3 rounded border text-text font-medium text-dark ">Iniciar Sesión
            </button>
        </form>
      </div>
    );
  };
  
  export default LoginForm;