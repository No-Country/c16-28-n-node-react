const { Router } = require('express');
const { getReviews, postReviews, putReviews, getReviewsByID , deleteReview} = require('./controllers/controllers-review');

const router= Router();

router.get('/', getReviews); // Obtiene todos las reviews
router.get('/:id_prov/:id_service', getReviewsByID); // Obtiene las reviews de un proveedor por su id
router.post('/post', postReviews) // Creamos una nueva reseña
router.put('/put:id_review', putReviews) // actualizamos la review 
router.delete("/delete/:id", deleteReview)


module.exports = router;