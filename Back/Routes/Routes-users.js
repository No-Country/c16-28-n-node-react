const { Router } = require('express');
const { getUsers } = require('./controllers/controllers-user');
const router= Router();

// Aca se agregan todos los request (PUT / GET /DELETE...)
router.get('/', getUsers); // ej: ruta get = Para obtener todos los usuarios registrados.


module.exports = router;