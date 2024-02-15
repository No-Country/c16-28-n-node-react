const { Router } = require('express');
const routesUsers = require("./Routes-users");
const routesProviders = require("./Routes-providers");
const routesReviews = require("./Routes-reviews")

// Aca va el indice de las rutas :)
// Vamos a necesitar unas 7 dependiendo del diagrama de tablas para la bd

const router = Router();

// Configurar los routes de users:
router.use('/users', routesUsers);

// confg las rutas de reviews:
router.use('/reviews', routesReviews ) 

// Configurar los routers de los proveedores
router.use('/providers', routesProviders);


module.exports = router;