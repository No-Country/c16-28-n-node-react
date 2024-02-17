const { Router } = require('express');
const {
  postImgService,
  getImgServices,
  getImgServiceById,
  putImgService,
  deleteImgService
} = require("./controllers/controllers-img-service");

const router = Router();

router.post('/post', postImgService);

router.get('/', getImgServices);

router.get('/:id', getImgServiceById);

router.put('/:id', putImgService);

router.delete('/:id', deleteImgService);

module.exports = router;
