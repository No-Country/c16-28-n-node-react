// Importa el módulo 'jsonwebtoken' para generar tokens JWT (Json Web Tokens)
import jwt from "jsonwebtoken";

// Importa el módulo 'dotenv' para cargar variables de entorno desde un archivo .env
import dotenv from "dotenv";

// Configura las variables de entorno desde el archivo .env
dotenv.config();

// Obtiene la clave secreta para la firma de tokens JWT desde las variables de entorno
const secretKey = process.env.JWT_SECRET_KEY;

// Función para generar un token JWT utilizando la información del usuario
export function generateToken(user) {
    const { id_provider, isProvider } = user;

    // Genera un token JWT con la información del usuario
    const token = jwt.sign(
        { userId: id, provider: isProvider },

        // Clave secreta utilizada para firmar el token
        secretKey,

        // Configuración adicional del token, en este caso, la expiración en 1 hora
        {
            expiresIn: "1h",
        }
    );

    // Devuelve el token generado
    return token;
}
/*********************************************************/
// COLOCAR EN SU .ENV --------> JWT_SECRET_KEY=EsUnSecreto