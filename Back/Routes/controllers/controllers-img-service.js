const { ImgService, Service, Provider } = require("../../Database/database");


//funcion para subir foto 
async function postImgService(req, res) {
  try {
    const { url, description, id_service, id_prov } = req.body;

    const service = await Service.findByPk(id_service);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    const provider = await Provider.findByPk(id_prov);
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    const imgService = await ImgService.create({
      url,
      description,
      id_service,
      id_prov
    });

    res.status(201).json(imgService);
  } catch (error) {
    console.error("Error creating image service:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}

// funcion para obtener todas las fotos 
async function getImgServices(req, res) {
  try {
    const imgServices = await ImgService.findAll();
    res.status(200).json(imgServices);
  } catch (error) {
    console.error("Error getting image services:", error);
    res.status(500).json({ error: "Error getting image services" });
  }
}

//funcion para obtener una foto por el id_service
async function getImgServiceById(req, res) {
  const { id } = req.params;
  try {
    const imgService = await ImgService.findByPk(id);
    if (!imgService) {
      return res.status(404).json({ message: "Image service not found" });
    }
    res.status(200).json(imgService);
  } catch (error) {
    console.error("Error getting image service by ID:", error);
    res.status(500).json({ error: "Error getting image service by ID" });
  }
}

//funcion para modificar una imagen
async function putImgService(req, res) {
  try {
    const { id } = req.params;
    const { url, description, id_service, id_prov } = req.body;

    const imgService = await ImgService.findByPk(id);
    if (!imgService) {
      return res.status(404).json({ message: "Image service not found" });
    }

    await imgService.update({
      url: url || imgService.url,
      description: description || imgService.description,
      id_service: id_service || imgService.id_service,
      id_prov: id_prov || imgService.id_prov,
    });

    res.status(200).json(imgService);
  } catch (error) {
    console.error("Error updating image service:", error);
    res.status(500).json({ error: "Error updating image service" });
  }
}

//funcion para borrar:
async function deleteImgService(req, res) {
  const { id } = req.params;
  try {
    const imgService = await ImgService.findByPk(id);
    if (!imgService) {
      return res.status(404).json({ message: "Image service not found" });
    }

    await imgService.destroy();
    console.log(`Image service ${id} removed successfully`);
    
    return res.status(204).end();
  } catch (error) {
    console.error("Error deleting image service:", error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  postImgService,
  getImgServices,
  getImgServiceById,
  putImgService,
  deleteImgService
};
