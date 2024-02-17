const { Router } = require('express');
const {
  postSolicited,
  getSolicited,
  getSolicitedByParameter,
  putSolicited,
  deleteSolicited
} = require("./controllers/controllers-solicited-service");

const router = Router();

router.get('/', getSolicited);

router.get('/by/:parameter/:value', getSolicitedByParameter);

router.post('/post', postSolicited);

router.put('/:id', putSolicited);

router.delete('/:id', deleteSolicited);

module.exports = router;

