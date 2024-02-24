const { Router } = require('express');
const routesUsers = require("./Routes-users");
const routesProviders = require("./Routes-providers");
const routesReviews = require("./Routes-reviews");
const routesServices = require("./Routes-services");
const routesRubros = require("./Routes-rubros");
const routesImg = require("./Routes-img");
const routesSolicited = require("./Routes-solicited");
const routesProvService = require("./Routes-provService")
const routesLogin = require("./Routes-Login")

// Aca va el indice de las rutas :)
// Vamos a necesitar unas 7 dependiendo del diagrama de tablas para la bd

const router = Router();

// Configurar los routes de users:
router.use('/users', routesUsers);

// confg las rutas de reviews:
router.use('/reviews', routesReviews)

// Configurar los routers de los proveedores
router.use('/providers', routesProviders);

// Config los routers de los servicios:
router.use('/services', routesServices);

// Config los routers de los rubros:
router.use('/rubros', routesRubros);

// Config los routers de los solicited:
router.use('/solicited', routesSolicited);

// Config los routers de los img:
router.use('/img', routesImg);

// Config los routers de ProvService:
router.use('/ProvService', routesProvService);

//Conf Login para user y para Prov:
router.use('/login', routesLogin);

module.exports = router;