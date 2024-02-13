const { Router } = require('express');
const routesUsers = require("./Routes-users")


// Aca va el indice de las rutas :)
// Vamos a necesitar unas 7 dependiendo del diagrama de tablas para la bd

const router = Router();

// Configurar los routers
router.use('/users', routesUsers); // Aca se van a configurar las rutas para manejar los usuarios


module.exports = router;