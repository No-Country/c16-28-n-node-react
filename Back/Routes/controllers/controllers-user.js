const { User }= require ("../../Database/database")

//Aca van a ir los controller de la ruta Users , (Cada ruta tiene su propio controlador)

// funcion para crear un usuario:
async function postUsers(req, res) {

    try {
        const { id, name, email, password } = req.body;
        const user = await User.create({
          id,
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


module.exports = {
    getUsers,
    postUsers };

