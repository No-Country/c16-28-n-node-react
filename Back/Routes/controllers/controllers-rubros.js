const { Rubro }= require ("../../Database/database")

// Controllers de la ruta Rubros:

// funcion para crear una Rubro:
async function postRubros(req, res) {
    try {
        const { name , description } = req.body;
        const rubro = await Rubro.create({
            name,
            description,
        });
        res.status(201).json(rubro);
    } catch (error) {
        console.error("Error creating rubro:",error);
        res.status(500).json({ "error": error });
    }
}

//funcion para obtener todos los rubros: 
async function getRubros(req, res) {
    try {
        const allRubros = await Rubro.findAll();
        res.status(200).json(allRubros);
    } catch (error) {
        console.error("Error getting Rubros:",error);
        res.status(500).json({ "error": error  });
    }
}


// función para actualizar un Rubro:
async function putRubro(req, res) {
    try {
        const { id_rubro } = req.params;
        const { name, description } = req.body;

        const rubro = await Rubro.findByPk(id_rubro);
        if (!rubro) {
            return res.status(404).json({ "message": "Rubro not found" });
        }
        await Rubro.update({
            name,
            description
        }, {
            where: {
                id_rubro: id_rubro
            }
        });

        res.status(200).json(Rubro);
    } catch (error) {
        console.error("Error updating Rubro:", error);
        res.status(500).json({ error: "Error updating Rubro" });
    }
};

async function deleteRubro(req, res) {
        const { id_rubro } = req.params; 
        try {
            const rubro = await Rubro.findByPk(id_rubro); 
            if (!rubro) {
                return res.status(404).json({ "message": "Rubro not found" });
            }
            await rubro.destroy(); 
            console.log(id_rubro, "Removed successfully" )
            return res.status(204).end(); 
        } catch (error) {
            console.error("Error deleting Rubro:", error);
            return res.status(500).json({ "error": error.message });
        }
    

}

module.exports = {
    getRubros,
    postRubros,
    putRubro,
    deleteRubro
    };

