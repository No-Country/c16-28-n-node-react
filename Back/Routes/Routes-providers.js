const { Router } = require('express');
const { getProviders, postProviders, putProvider, getProvidersByID} = require("./controllers/controllers-provider");
const router = Router();

router.get('/', getProviders);
router.get('/:id_prov', getProvidersByID);
router.post('/post', postProviders);
router.put('/:id', putProvider);

module.exports = router