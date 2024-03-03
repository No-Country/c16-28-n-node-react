// Importa el módulo 'USER' desde el archivo '../database/user.entity.js'
import USER from "../database/user.entity.js";
// Importa el módulo 'bcrypt' para manejar el cifrado y la comparación de contraseñas
import bcrypt from "bcrypt";
// Importa la función 'generateToken' desde el archivo './jwt.service.js'
import { generateToken } from "./jwtServices.js";

// Función asincrónica para realizar el proceso de inicio de sesión
export async function login(email, password) {
    try {
        // Busca un usuario en la base de datos con el correo electrónico proporcionado
        const user = await USER.findOne({ where: { email } });

        // Si no se encuentra un usuario, lanza un error
        if (!user) throw new Error("El usuario no existe");

        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
        const isMatch = await bcrypt.compare(password, user.password);

        // Si la contraseña no coincide, lanza un error
        if (!isMatch) throw new Error("La contraseña es incorrecta");

        // Genera un token JWT (Json Web Token) utilizando la información del usuario
        const token = generateToken(user)

        // Devuelve el usuario y el token como un objeto
        return { user, token };
    } catch (error) {
        // Si ocurre algún error en el proceso, lanza un error con un mensaje
        throw new Error("Error al buscar el usuario: " + error.message);
    }
}

export async function profile(user) {
    try {
        const result = await USER.findByPk(user.id);
        return result
    } catch (error) {
        // Si ocurre algún error en el proceso, lanza un error con un mensaje
        throw new Error("Error al buscar el usuario: " + error.message);
    }
}