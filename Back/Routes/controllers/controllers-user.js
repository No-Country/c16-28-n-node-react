const { User, Provider } = require("../../Database/database");
const {registerUser, updatePerfil }= require("../../Services/mailerServices");
const cloudinary = require('cloudinary').v2;

//Aca van a ir los controller de la ruta Users , (Cada ruta tiene su propio controlador)

// Validaciones
function validateName(name) {
  return /^[a-zA-Z0-9]{3,15}$/.test(name);
}

function validateLastName(lastName) {
  return /^[a-zA-Z0-9]{3,15}$/.test(lastName);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%.-*?&])[A-Za-z\d@$!%*?-.&]{6,10}$/.test(password);
}


// funcion para crear un usuario:
async function postUsers(req, res) {

  try {
    const { name, lastName, email, password,  } = req.body;

    // Validaciones de los campos
    const errores = [];
    if (name && !validateName(name)) {
      errores.push("El nombre debe ser alfanumérico y tener entre 3 y 15 caracteres");
    }
    if (lastName && !validateLastName(lastName)) {
      errores.push("El apellido debe ser alfanumérico y tener entre 3 y 15 caracteres");
    }
    if (email && !validateEmail(email)) {
      errores.push("Formato de correo electrónico inválido");
    }
    if (password && !validatePassword(password)) {
      errores.push("La contraseña debe tener entre 6 y 10 caracteres, al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial");
    }
    

    if (errores.length > 0) {
      return res.status(400).json({ "ERROR:": errores });
    }

    // Verificar si el email ya existe
    const existingUser = await User.findOne({ where: { email } });
    const existingProv = await Provider.findOne({ where: { email } });
    if (existingUser || existingProv) {
      return res.status(400).json({ "error": "Email already exists" });
    }

    const user = await User.create({
      name,
      lastName,
      email,
      password,
      isActive: true,
    });

    registerUser(name, email, lastName);

    res.status(201).json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": error });
  }
}


//funcion para obtener usuarios: 
async function getUsers(req, res) {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": error });
  }
}

async function getUserById(req, res) {
  try {
    const { id_user } = req.params;
    const user = await User.findByPk(id_user);
    if (!user) {
      return res.status(404).json({ "message": "User not found" })
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "error": error });
    
  }

}

//funcion para actualizar un usuario: 
async function putUsers(req, res) {
  try {
    const { id_user } = req.params;
    const { name, email, password, isActive, lastName, contact, img } = req.body;

    // Validaciones de los campos
    const errores = [];
    if (name && !validateName(name)) {
      errores.push("El nombre debe ser alfanumérico y tener entre 3 y 15 caracteres");
    }
    if (lastName && !validateLastName(lastName)) {
      errores.push("El apellido debe ser alfanumérico y tener entre 3 y 15 caracteres");
    }
    if (email && !validateEmail(email)) {
      errores.push("Formato de correo electrónico inválido");
    }
    if (password && !validatePassword(password)) {
      errores.push("La contraseña debe tener entre 6 y 10 caracteres, al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial");
    }
    
    if (errores.length > 0) {
      return res.status(400).json({ "error": errores });
    }

    // Buscar el usuario por su id
    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(404).json({ "message": "User no encontrado" });
    }

    // Verificar si el email ya existe
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      const existingProv = await Provider.findOne({ where: { email } });
      if (existingUser || existingProv) {
        return res.status(400).json({ "error": "El email ingresado ya existe" });
      }
    }

    let imgUrl = user.img; 

    if (req.file) {
      const uploadedImg = await cloudinary.uploader.upload(req.file.path);
      imgUrl = uploadedImg.secure_url;
    }

    const emaiL = email || user.email;
    const namE = name || user.name;
    const lastNamE= lastName || user.lastName;

    await user.update({
      name: name || user.name,
      email: email || user.email,
      password: password || user.password,
      lastName: lastName || user.lastName,
      contact: contact || user.contact,
      isActive: isActive !== undefined ? isActive : user.isActive,
      img: imgUrl,
    });

    updatePerfil(emaiL , namE , lastNamE)
    
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ "error": error.message });
  }
}


module.exports = {
  getUsers,
  getUserById,
  postUsers,
  putUsers
};

