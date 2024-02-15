const { Router } = require('express');
const routesUsers = require("./Routes-users");
const routesProviders = require("./Routes-providers");
const routesReviews = require("./Routes-reviews");
const routesServices = require("./Routes-services");
const routesRubros = require("./Routes-rubros");

// Aca va el indice de las rutas :)
// Vamos a necesitar unas 7 dependiendo del diagrama de tablas para la bd

const router = Router();

// Configurar los routes de users:
router.use('/users', routesUsers);

// confg las rutas de reviews:
router.use('/reviews', routesReviews ) 

// Configurar los routers de los proveedores
router.use('/providers', routesProviders);

// Config los routers de los servicios:
router.use('/services', routesServices);

// Config los routers de los rubros:
router.use('/rubros', routesRubros);

module.exports = router;