const { User }= require ("../../Database/database")

//Aca van a ir los controller de la ruta Users , (Cada ruta tiene su propio controlador)

// funcion para crear un usuario:
async function postUsers(req, res) {

    try {
        const { name, email, password } = req.body;
        const user = await User.create({
          name,
          email,
          password,
          isActive: true, 
        });
        res.status(201).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error  });
      }
}

//funcion para obtener usuarios: 
async function getUsers(req, res) {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error  });
    }
}

//funcion para actualizar un usuario: 
async function putUsers(req, res) {
  try {
    const { id_user } = req.params;
    const { name, email, password, isActive } = req.body;

    // Buscar el usuario por su id
    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(404).json({ "message": "User not found" });
    }

    // Actualizar el usuario con los nuevos valores
    await user.update({
      name,
      email,
      password,
      isActive
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

