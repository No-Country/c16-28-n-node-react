const { Provider , Service , User } = require("../../Database/database");
const MailService = require("../../Services/mailerServices");

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

// Crear un proveedor
async function postProviders(req, res) {
  try {
    const { name, email, lastName, password} = req.body;

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
    const provider = await Provider.create({
      name,
      lastName,
      email,
      password,
      isActive: true
    })

    MailService(name, email, lastName);

    res.status(200).json(provider)
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ "error": error })
  }

}


// Modificar proveedor
async function putProvider(req, res) {
  try {
    const { id } = req.params;
    const {name, lastName, email, address, password, img, otherCertif, id_service, isActive,contact, horary,matriculation } = req.body;

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
    // Buscar proveedor y servicio:
    const provider = await Provider.findByPk(id);
    if (!provider) {
      return res.status(404).json({ "message": "Provider not found" });
  }
      const service = await Service.findByPk(id_service);
    if (!service) {
      return res.status(404).json({ "message": "Service not found" });
  }

   // Verificar si el email ya existe
  if (email && email !== provider.email) {
    const existingUser = await User.findOne({ where: { email } });
    const existingProv = await Provider.findOne({ where: { email } });
    if (existingUser || existingProv) {
        return res.status(400).json({ "error": "Email already exists" });
    }
}
      await provider.update({
        name:  name || provider.name,
        lastName:lastName || provider.lastName,
        email:email || provider.email,
        password:password || provider.password,
        id_service: service|| provider.id_service,
        img: img || provider.id_service,
        otherCertif: otherCertif || provider.otherCertif,
        address: address || provider.address,
        contact: contact || provider.contact,
        horary: horary || provider.horary,
        matriculation: matriculation || provider.matriculation,
        isActive: isActive || provider.isActive
    }, {
      where: { id_prov: id }
    });

    res.status(200).json(provider);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ "error": error })
  }
}

module.exports = {
  getProviders,
  postProviders,
  putProvider
}