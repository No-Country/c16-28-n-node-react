const { Router } = require('express');
const routesUsers = require('./Routes-users');
const routesProviders = require('./Routes-providers');
const routesReviews = require('./Routes-reviews');
const routesServices = require('./Routes-services');
const routesRubros = require('./Routes-rubros');
const routesImg = require('./Routes-img');
const routesSolicited = require('./Routes-solicited');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const routesProvService = require('./Routes-provService');
const routesLogin = require('./Routes-Login');

const router = Router();

// Configurar los routes de users:
router.use(routesUsers);

// confg las rutas de reviews:
router.use('/reviews', routesReviews);

// Configurar los routers de los proveedores
router.use('/providers', routesProviders);

// Config los routers de los servicios:
router.use('/services', routesServices);

// Config los routers de los rubros:
router.use('/rubros', routesRubros);

// Config los routers de los solicited:
router.use('/solicited', routesSolicited);

// Config los routers de ProvService:
router.use('/ProvService', routesProvService);

//Conf Login para user y para Prov:
router.use('/login', routesLogin);

// Config los routers de los img:
router.use('/img', routesImg);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
});

const upload = multer({ storage: storage });

//Subir archivos a cloudinary:
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const uploadedImg = await cloudinary.uploader.upload(req.file.path);

    res.status(200).json(uploadedImg.secure_url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al subir la imagen' });
  }
});

module.exports = router;
