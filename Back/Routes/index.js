const { Router } = require('express');
const routesUsers = require("./Routes-users"); 
const routesReviews = require("./Routes-reviews")

// Aca va el indice de las rutas :)
// Vamos a necesitar unas 7 dependiendo del diagrama de tablas para la bd

const router = Router();

// Configurar los routers
router.use('/users', routesUsers); // config de las rutas usuarios
router.use('/reviews', routesReviews ) // Config de rutas reviews


module.exports = router;