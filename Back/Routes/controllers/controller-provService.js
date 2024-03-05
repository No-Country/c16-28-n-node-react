const { ProviderService } = require("../../Database/database");

//funcion para obtener todos los servicios y proveedores:  
async function getProvService(req, res) {
    try {
        const allProvServ = await ProviderService.findAll();
        res.status(200).json(allProvServ );
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error  });
    }
}

//funcion para obtener ProvServ:
async function getProvServiceByID(req, res) {
    const { id_service } = req.params;
    console.log("id_service:", id_service);

    try {
        const allProviders = await ProviderService.findAll({ where: { id_service } });
        res.status(200).json(allProviders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": error });
    }
}

async function deleteProvService (req, res){
    const {id} = req.params;

    try {
        // Verificar si el servicio solicitado existe
        const service = await ProviderService.findByPk(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        // Eliminar el servicio solicitado
        await service.destroy();
        console.log(id, "Removed successfully");
        return res.status(204).end();
    } catch (error) {
        console.error("Error deleting", error);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}



module.exports = {
getProvService ,
getProvServiceByID,
deleteProvService
}