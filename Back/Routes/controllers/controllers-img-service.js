const { ImgService, Service, Rubro } = require("../../Database/database");

async function postImgService(req, res) {
  try {
    const { url, description, id_service, id_rubro } = req.body;

    const rubro = await Rubro.findByPk(id_rubro);
    if (!rubro) {
      return res.status(404).json({ message: "Rubro not found" });
    }
    const service = await Service.findByPk(id_service);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    const imgService = await ImgService.create({
      url,
      description,
      id_service,
      id_rubro
    });
    res.status(201).json(imgService);
  } catch (error) {
    console.error("Error creating image service:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}

async function getImgServices(req, res) {
  try {
    const imgServices = await ImgService.findAll();
    res.status(200).json(imgServices);
  } catch (error) {
    console.error("Error getting image services:", error);
    res.status(500).json({ error: "Error getting image services" });
  }
}

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

async function putImgService(req, res) {
  try {
    const { id } = req.params;
    const { url, description, id_service, id_rubro } = req.body;

    const imgService = await ImgService.findByPk(id);
    if (!imgService) {
      return res.status(404).json({ message: "Image service not found" });
    }

    await imgService.update({
      url,
      description,
      id_service,
      id_rubro
    });

    res.status(200).json(imgService);
  } catch (error) {
    console.error("Error updating image service:", error);
    res.status(500).json({ error: "Error updating image service" });
  }
}

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
