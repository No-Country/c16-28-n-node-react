const { Router } = require('express');
const { getUsers, postUsers, putUsers, getUserById } = require('./controllers/controllers-user');
const router= Router();

// Aca se agregan todos los request (PUT / POST / GET)
router.get('/', getUsers); // Obtiene todos los usuarios registrados.
router.get('/:id_user', getUserById); //Obtiene un usuario por su ID.
router.post('/', postUsers) // Creamos un nuevo usuario
router.put('/:id_user', putUsers) // Actualizamos el usuario


module.exports = router;