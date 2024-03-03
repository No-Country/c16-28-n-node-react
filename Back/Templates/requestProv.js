function requestProvTemplate(nameUser, lastNameUser,nameProv, lastNameProv, nameRequest, services) {
    const contentHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
    <h1 style="color: #fff; margin-bottom: 20px; background-color: #FF6F00; padding: 10px;">¡Has recibido una Solicitud!</h1>
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;">${nameProv} ${lastNameProv} has recibido la solicitud <strong>${nameRequest}</strong> para el servicio <strong>${services}</strong>.</p>
    <p style="color: #666;">La misma la realizó el usuario <strong>${nameUser} ${lastNameUser}</strong>, el cual se encuentra en espera de tu respuesta.</p>
    <p style="color: #666;">Para no perder esta oportunidad, te recomendamos que contestes la solicitud lo más pronto posible.</p>
    <h2>¡Muchas gracias por elegirnos!</h2>
    <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
  </div>
  
    `;
    return contentHTML;
  }
  
  module.exports = requestProvTemplate;
  