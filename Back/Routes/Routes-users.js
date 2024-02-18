const { Router } = require('express');
const { getUsers, postUsers, putUsers } = require('./controllers/controllers-user');
const router= Router();

// Aca se agregan todos los request (PUT / GET /DELETE...)
router.get('/', getUsers); // Obtiene todos los usuarios registrados.
router.post('/post', postUsers) // Creamos un nuevo usuario
router.put('/put:id_user', putUsers) // Actualizamos el usuario


module.exports = router;