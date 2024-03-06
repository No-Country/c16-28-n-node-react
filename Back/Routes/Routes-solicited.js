const { Router } = require('express');
const {
  postSolicited,
  getSolicited,
  getSolicitedByParameter,
  putSolicited,
  deleteSolicited
} = require("./controllers/controllers-solicited-service");

// Rutas para la gestión de servicios solicitados:

const router = Router();

// Ruta para obtener todos los servicios solicitados (GET)
router.get('/', getSolicited);

// Ruta dinámica para obtener servicios solicitados por parámetro y valor específicos (GET)
router.get('/by/:parameter/:value', getSolicitedByParameter);

// Ruta para crear un nuevo servicio solicitado (POST)
router.post('/post', postSolicited);

// Ruta para actualizar un servicio solicitado por ID (PUT)
router.put('/:id_solicited', putSolicited);

// Ruta para eliminar un servicio solicitado por ID (DELETE)
router.delete('/:id_solicited', deleteSolicited);

module.exports = router;

