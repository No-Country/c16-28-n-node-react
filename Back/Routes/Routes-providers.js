const { Router } = require('express');
const { getProviders, postProviders, putProvider} = require("./controllers/controllers-provider");
const router = Router();

router.get('/', getProviders);
router.post('/', postProviders);
router.put('/:id', putProvider);

module.exports = router