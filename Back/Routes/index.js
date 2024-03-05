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
const verificationToken = require('./Routes-verifitacion')

const router = Router();

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); 
  }
}

router.use('/reviews', verifyToken, routesReviews);
router.use('/solicited', verifyToken, routesSolicited);
router.use('/ProvService', verifyToken, routesProvService);
router.use('/users', verifyToken, routesUsers);
router.use('/img',verifyToken , routesImg);
router.use('/providers',verifyToken, routesProviders);

router.use('/services', routesServices);
router.use('/rubros', routesRubros);
router.use(routesLogin);
router.use('/verificar', verificationToken)


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
