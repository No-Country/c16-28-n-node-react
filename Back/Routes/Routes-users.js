const { Router } = require('express');
const { getUsers, postUsers, putUsers } = require('./controllers/controllers-user');
const router= Router();

// Aca se agregan todos los request (PUT / POST / GET)
router.get('/users', getUsers); // Obtiene todos los usuarios registrados.
router.post('/users', postUsers) // Creamos un nuevo usuario
router.put('/users/:id_user', putUsers) // Actualizamos el usuario


module.exports = router;