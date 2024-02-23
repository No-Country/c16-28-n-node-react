const { Router } = require('express');
const { getProvService, getProvServiceByID } = require('./controllers/controller-provService');

const router= Router();

router.get('/', getProvService); // Obtiene todos las Services y prov
router.get('/:id_service', getProvServiceByID);


module.exports = router;