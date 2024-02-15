const { Provider } = require("../../Database/database");


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
    const { name, email, password, address, id_service, contact, id_prov } = req.body;

    const provider = await Provider.create({
      id_prov,
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

    const { address, password, id_service, contact } = req.body;

    const updateProvider = await Provider.update({
      address,
      password,
      id_service,
      contact
    }, {
      where: { id_prov: id }
    })

    res.status(200).send({msj: "Actualizado correctamente"})

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