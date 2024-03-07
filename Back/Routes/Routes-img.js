const { Router } = require('express');
const {
  postImgService,
  getImgServices,
  getImgServiceById,
  putImgService,
  deleteImgService
} = require("./controllers/controllers-img-service");


const router = Router();

// Rutas para la gestión de servicios de imágenes:

// Ruta para crear una nueva imagen (POST)
router.post('/post', postImgService);

// Ruta para obtener todas las imágenes de servicios (GET)
router.get('/', getImgServices);

// Ruta para obtener una imagen por ID (GET)
router.get('/:id_prov/:id_service', getImgServiceById);

// Ruta para actualizar una imagen por ID (PUT)
router.put('/:id', putImgService);

// Ruta para eliminar un servicio de imagen por ID (DELETE)
router.delete('/:id', deleteImgService);

module.exports = router;



