const { Router } = require('express');
const { getReviews, postReviews, putReviews, getReviewsByID } = require('./controllers/controllers-review');

const router= Router();

router.get('/', getReviews); // Obtiene todos las reviews
router.get('/:id_prove', getReviewsByID); // Obtiene las reviews de un proveedor por su id
router.post('/post', postReviews) // Creamos una nueva reseña
router.put('/put:id_review', putReviews) // actualizamos la review 


module.exports = router;