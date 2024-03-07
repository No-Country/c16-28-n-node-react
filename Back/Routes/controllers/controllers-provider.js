const { Provider , Service , User } = require("../../Database/database");
const { updatePerfil, sendVerificationEmailProv} = require("../../Services/mailerServices");
const cloudinary = require('cloudinary').v2;

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

// Funciones: 

// Traer todos los proveedores
async function getProviders(req, res) {
  try {
    const allProviders = await Provider.findAll();
    res.status(200).json(allProviders)
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ "error": error })
  }
}

//Traer detalle de un proveedor: 

async function getProvidersByID(req,res){
  const { id_prov } = req.params;
  try {
    const provider = await Provider.findByPk(id_prov)

    if (!provider || provider.length === 0) {
        return res.status(404).json({ error: "No provider found for the ID" });
    }

    res.status(200).json(provider);
} catch (error) {
    console.error("Error getting provider by ID:", error);
    res.status(500).json({ error: "Error getting provider by ID" });
}
}

// Crear un proveedor
async function postProviders(req, res) {
  try {
    const { name, email, lastName, password} = req.body;

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

    const existingUser = await User.findOne({ where: { email } });
    const existingProv = await Provider.findOne({ where: { email } });
    if (existingUser || existingProv) {
      return res.status(400).json({ "error": "El email ingresado esta utilizado, intente con otro" });
    }

    const provider = await Provider.create({
      name,
      lastName,
      email,
      password
    });

    await sendVerificationEmailProv(provider);

    res.status(200).json(provider);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ "error": error });
  }
}


// Modificar proveedor
async function putProvider(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, address, password, otherCertif, isActive, contact, horary, matriculation, id_services } = req.body;

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

    const provider = await Provider.findByPk(id);
    if (!provider) {
      return res.status(404).json({ "message": "Proveedor no encontrado" });
    }

    if (email && email !== provider.email) {
      const existingUser = await User.findOne({ where: { email } });
      const existingProv = await Provider.findOne({ where: { email } });
      if (existingUser || existingProv) {
        return res.status(400).json({ "error": "El email ingresado ya esta en uso" });
      }
    }

    let services = [];
    if (id_services && typeof id_services === 'string') {
      services = id_services.split(',').map(Number);
    }

    let imgUrl = provider.img;

    if (req.file) {
      const uploadedImg = await cloudinary.uploader.upload(req.file.path);
      imgUrl = uploadedImg.secure_url;
    }

    const emaiL = email || provider.email;
    const namE = name || provider.name;
    const lastNamE= lastName || provider.lastName;

    await provider.update({
      name: name || provider.name,
      lastName: lastName || provider.lastName,
      email: email || provider.email,
      password: password || provider.password,
      img: imgUrl,
      otherCertif: otherCertif || provider.otherCertif,
      address: address || provider.address,
      contact: contact || provider.contact,
      horary: horary || provider.horary,
      matriculation: matriculation || provider.matriculation,
      isActive: isActive || provider.isActive
    });

    await provider.setServices(services);
    const updatedProvider = await Provider.findByPk(id, { include: Service });

    updatePerfil(emaiL , namE , lastNamE)

    res.status(200).json(updatedProvider);

  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ "error": error });
  }
}


module.exports = {
  getProviders,
  postProviders,
  putProvider,
  getProvidersByID
}