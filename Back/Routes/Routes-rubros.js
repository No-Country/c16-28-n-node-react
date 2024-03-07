const { Router } = require('express');
const { getRubros, postRubros, putRubro, deleteRubro } = require('./controllers/controllers-rubros');

const router= Router();

router.get('/', getRubros); // Obtiene todos los Rubros
router.post('/post', postRubros) // Creamos un nuevo rubro
router.put('/put:id_rubro', putRubro) // actualizamos un rubro
router.delete('/delete:id_rubro', deleteRubro); //elimina un rubro


module.exports = router;