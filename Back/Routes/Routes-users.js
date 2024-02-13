const { Router } = require('express');
const { getUsers, postUsers } = require('./controllers/controllers-user');
const router= Router();

// Aca se agregan todos los request (PUT / GET /DELETE...)
router.get('/', getUsers); // Obtiene todos los usuarios registrados.
router.post('/post', postUsers) // Creamos un nuevo usuario


module.exports = router;