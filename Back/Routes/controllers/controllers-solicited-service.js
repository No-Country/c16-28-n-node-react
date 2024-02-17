const { Solicited, User, Provider, Service } = require("../../Database/database")


// Función para crear un nuevo servicio solicitado
async function postSolicited(req, res) {
    try {
        const { id_user, id_prov, id_service, description } = req.body;

        // Verificar si el usuario, proveedor y servicio existen
        const user = await User.findByPk(id_user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const provider = await Provider.findByPk(id_prov);
        if (!provider) {
            return res.status(404).json({ message: "Provider not found" });
        }
        const service = await Service.findByPk(id_service);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        // Crear un nuevo servicio solicitado
        const solicited = await Solicited.create({
            id_user,
            id_prov,
            id_service,
            description,
        });
        res.status(201).json(solicited);
    } catch (error) {
        console.error("Error creating solicited:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}


// Función para obtener todos los servicios solicitados
async function getSolicited(req, res) {
    try {
        const allSolicited = await Solicited.findAll();
        res.status(200).json(allSolicited);
    } catch (error) {
        console.error("Error getting Solicited:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}



// Función de ruta dinámica para obtener servicios solicitados basados en un parámetro
const getSolicitedByParameter = async (req, res) => {
    const { parameter, value } = req.params;

    try {
        const solicitedServices = await Solicited.findAll({
            where: {
                [parameter]: value,
            },
        });

        if (!solicitedServices || solicitedServices.length === 0) {
            return res
                .status(404)
                .json({ error: `No solicited services found for the provided ${parameter}` });
        }

        res.status(200).json(solicitedServices);
    } catch (error) {
        console.error(`Error getting Solicited by ${parameter}:`, error);
        res.status(500).json({ error: `Error getting Solicited by ${parameter}` });
    }
};



// Función para actualizar un servicio solicitado
async function putSolicited(req, res) {
    try {
        const { id_solicited } = req.params;
        const { id_user, id_prov, id_service, description } = req.body;

        // Verificar si el servicio solicitado existe
        const solicited = await Solicited.findByPk(id_solicited);
        if (!solicited) {
            return res.status(404).json({ message: "Solicited not found" });
        }

        // Actualizar el servicio solicitado
        await solicited.update({
            id_user,
            id_prov,
            id_service,
            description,
        });

        res.status(200).json(solicited);
    } catch (error) {
        console.error("Error updating Solicited:", error);
        res.status(500).json({ error: "Error updating Solicited" });
    }
}

// Función para eliminar un servicio solicitado
async function deleteSolicited(req, res) {
    const { id_solicited } = req.params;

    try {
        // Verificar si el servicio solicitado existe
        const solicited = await Solicited.findByPk(id_solicited);
        if (!solicited) {
            return res.status(404).json({ message: "Solicited not found" });
        }

        // Eliminar el servicio solicitado
        await solicited.destroy();
        console.log(id_solicited, "Removed successfully");
        return res.status(204).end();
    } catch (error) {
        console.error("Error deleting Solicited:", error);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}

// Exportar las funciones para ser utilizadas en otros módulos
module.exports = {
    getSolicited,
    postSolicited,
    putSolicited,
    getSolicitedByParameter,
    deleteSolicited,
};
