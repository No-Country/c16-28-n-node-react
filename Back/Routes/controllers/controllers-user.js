const { User, Provider } = require("../../Database/database");
const MailService = require("../../Services/mailerServices");

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
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/.test(password);
}


// funcion para crear un usuario:
async function postUsers(req, res) {

  try {
    const { name, email, password, lastName } = req.body;

    // Validaciones de los campos
    const errors = [];
    if (!validateName(name)) {
      errors.push("Name must be alphanumeric and have 3 to 15 characters");
    }
    if (!validateLastName(lastName)) {
      errors.push("Last name must be alphanumeric and have 3 to 15 characters");
    }
    if (!validateEmail(email)) {
      errors.push("Invalid email format");
    }
    if (!validatePassword(password)) {
      errors.push("Password must have 6 to 10 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character");
    }

    if (errors.length > 0) {
      return res.status(400).json({ "error": errors });
    }

    // Verificar si el email ya existe
    const existingUser = await User.findOne({ where: { email } });
    const existingProv = await Provider.findOne({ where: { email } });
    if (existingUser || existingProv) {
      return res.status(400).json({ "error": "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      lastName,
      password,
      isActive: true,
    });

    MailService(name, email, lastName);

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

//funcion para actualizar un usuario: 
async function putUsers(req, res) {
  try {
    const { id_user } = req.params;
    const { name, email, password, isActive, lastName, contact } = req.body;

    // Validaciones de los campos
    const errors = [];
    if (name && !validateName(name)) {
      errors.push("Name must be alphanumeric and have 3 to 15 characters");
    }
    if (lastName && !validateLastName(lastName)) {
      errors.push("Last name must be alphanumeric and have 3 to 15 characters");
    }
    if (email && !validateEmail(email)) {
      errors.push("Invalid email format");
    }
    if (password && !validatePassword(password)) {
      errors.push("Password must have 6 to 10 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character");
    }

    if (errors.length > 0) {
      return res.status(400).json({ "error": errors });
    }

    // Buscar el usuario por su id
    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(404).json({ "message": "User not found" });
    }

    // Verificar si el email ya existe
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      const existingProv = await Provider.findOne({ where: { email } });
      if (existingUser || existingProv) {
        return res.status(400).json({ "error": "Email already exists" });
      }
    }

    // Actualizar el usuario con los nuevos valores
    await user.update({
      name: name || user.name,
      email: email || user.email,
      password: password || user.password,
      lastName: lastName || user.lastName,
      contact: contact || user.contact,
      isActive: isActive !== undefined ? isActive : user.isActive
    });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ "error": error.message });
  }
}


module.exports = {
  getUsers,
  postUsers,
  putUsers
};

