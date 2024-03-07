const { Router } = require('express');
const { getServices, getServicesByID, postServices, putService, deleteService } = require('./controllers/controllers-services');

const router= Router();

router.get('/', getServices); // Obtiene todos las Services
router.post('/post', postServices) // Creamos un nuevo servicio
router.get('/:id_rubro', getServicesByID); // Obtiene de un rubro todos los servicios
router.put('/put:id_service', putService) // actualizamos un servicio
router.delete('/delete:id_service', deleteService); //elimina un servicio


module.exports = router;