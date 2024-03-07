const { Service , Rubro }= require ("../../Database/database")

// Controllers de la ruta Services:

// funcion para crear una Service:
async function postServices(req, res) {
    try {
        const { name , description, id_rubro } = req.body;

        const rubro = await Rubro.findByPk(id_rubro);
        if (!rubro) {
            return res.status(404).json({ "message": "Rubro not found" });
        }
        const service = await Service.create({
            name,
            description,
            id_rubro
        });
        res.status(201).json(service);
    } catch (error) {
        console.error("Error creating service:",error);
        res.status(500).json({ "error": error });
    }
}

//funcion para obtener todos los servicios: 
async function getServices(req, res) {
    try {
        const allServices = await Service.findAll();
        res.status(200).json(allServices);
    } catch (error) {
        console.error("Error getting Services:",error);
        res.status(500).json({ "error": error  });
    }
}

//funcion para traer todos los servicios de un rubro :
const getServicesByID = async (req, res) => {
    const { id_rubro } = req.params;

    try {
        const services = await Service.findAll({
        where: {
            id_rubro : id_rubro
            }
        });

        if (!services || services.length === 0) {
            return res.status(404).json({ error: "No services found for the provided rubro ID" });
        }

        res.status(200).json(services);
    } catch (error) {
        console.error("Error getting Services by ID:", error);
        res.status(500).json({ error: "Error getting Services by ID" });
    }
};


// función para actualizar una Service:
async function putService(req, res) {
    try {
        const { id_service } = req.params;
        const { name, description, id_rubro , id_prov} = req.body;

        const service = await Service.findByPk(id_service);
        if (!service) {
            return res.status(404).json({ "message": "Service not found" });
        }
        await service.update({
            name,
            description,
            id_rubro,
            id_prov
        }, {
            where: {
                id_service: id_service
            }
        });

        res.status(200).json(service);
    } catch (error) {
        console.error("Error updating Service:", error);
        res.status(500).json({ error: "Error updating Service" });
    }
};

async function deleteService(req, res) {
        const { id_service } = req.params; 
        try {
            const service = await Service.findByPk(id_service); 
            if (!service) {
                return res.status(404).json({ "message": "Service not found" });
            }
            await service.destroy(); 
            console.log(id_service, "Removed successfully" )
            return res.status(204).end(); 
        } catch (error) {
            console.error("Error deleting Service:", error);
            return res.status(500).json({ "error": error.message });
        }
    

}

module.exports = {
    getServices,
    postServices,
    putService,
    getServicesByID,
    deleteService
};

