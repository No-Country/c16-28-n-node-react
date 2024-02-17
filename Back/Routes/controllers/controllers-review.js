const { Review }= require ("../../Database/database")

// Controllers de la ruta Reviews:

// funcion para crear una review:
async function postReviews(req, res) {
    try {
        const { id_user, id_prov, id_service, id_solicited, description, score } = req.body;
        
        // Verificar que los campos requeridos no estén en blanco
        if (!id_user) {
            return res.status(400).json({ "error": "User ID is required" });
        }
        if (!id_prov) {
            return res.status(400).json({ "error": "Provider ID is required" });
        }
        if (!id_service) {
            return res.status(400).json({ "error": "Service ID is required" });
        }
        if (!id_solicited) {
            return res.status(400).json({ "error": "Solicited ID is required" });
        }
        if (!score) {
            return res.status(400).json({ "error": "Score is required" });
        }

        // Verificar la longitud de la descripción
        if (description && description.length > 250) {
            return res.status(400).json({ "error": "Description must be less than or equal to 250 characters" });
        }

        const review = await Review.create({
            id_user,
            id_prov,
            id_service,
            id_solicited,
            description,
            score
        });
        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error });
    }
}

//funcion para obtener Reseñas: 
async function getReviews(req, res) {
    try {
        const allReviews = await Review.findAll();
        res.status(200).json(allReviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error  });
    }
}

//funcion para traer todas las reseñas de un solo proveedor:
const getReviewsByID = async (req, res) => {
    const { id_prov } = req.params;

    try {
        const prov = await Review.findByPk(id_prov);
        if (!prov) {
            return res.status(404).json({ "message": "Provider not found" });
        }

        const reviews = await Review.findAll({
            where: {
                id_prov: id_prov
            }
        });

        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error getting reviews" });
    }
};


// función para actualizar una review:
async function putReviews(req, res) {
    try {
        const { id_review } = req.params;
        const { id_user, id_prov, id_service, description, score } = req.body;

        const review = await Review.findByPk(id_review);
        if (!review) {
            return res.status(404).json({ "message": "Review not found" });
        }

        // Verificar que los campos requeridos no estén en blanco
        if (!id_user) {
            return res.status(400).json({ "error": "User ID is required" });
        }
        if (!id_prov) {
            return res.status(400).json({ "error": "Provider ID is required" });
        }
        if (!id_service) {
            return res.status(400).json({ "error": "Service ID is required" });
        }
        if (!score) {
            return res.status(400).json({ "error": "Score is required" });
        }

        // Verificar la longitud de la descripción
        if (description && description.length > 250) {
            return res.status(400).json({ "error": "Description must be less than or equal to 250 characters" });
        }

        await review.update({
            id_user,
            id_prov,
            id_service,
            description,
            score
        });

        res.status(200).json(review);
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ "error": error.message });
    }
}


module.exports = {
    getReviews,
    postReviews,
    putReviews,
    getReviewsByID
    };

