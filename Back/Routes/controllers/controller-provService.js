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

//funcion para obtener Reseñas: 
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


module.exports = {
getProvService ,
getProvServiceByID
}