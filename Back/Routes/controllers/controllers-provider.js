const { Provider , Service  } = require("../../Database/database");


async function getProviders(req, res) {
  try {
    const allProviders = await Provider.findAll();
    res.status(200).json(allProviders)
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ "error": error })
  }
}

async function postProviders(req, res) {
  try {
    const { name, email, password, address, id_service, contact } = req.body;

    const service = await Service.findByPk(id_service);
    if (!service) {
      return res.status(404).json({ "message": "Service not found" });
  }
    const provider = await Provider.create({
      name,
      email,
      password,
      address,
      id_service,
      contact,
      isActive: true
    })

    res.status(200).json(provider)
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ "error": error })
  }

}

async function putProvider(req, res) {
  try {
    const { id } = req.params;
    const { address, password, id_service, isActive,contact } = req.body;

    const provider = await Provider.findByPk(id);
    if (!provider) {
      return res.status(404).json({ "message": "Provider not found" });
  }
      await Provider.update({
      address,
      password,
      id_service,
      contact,
      isActive
    }, {
      where: { id_prov: id }
    });

    res.status(200).json(provider);

  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ "error": error })
  }
}

module.exports = {
  getProviders,
  postProviders,
  putProvider
}