
function notifyUserRequestAccepted(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services) {
  const contentHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
      <h1 style="color: #333; text-align: center; margin-bottom: 20px;">¡Solicitud Aceptada!</h1>
      <hr style="border: 1px solid #0D47A1;">
      <p style="color: #666;">¡¡Buenas noticias, ${nameUser} ${lastNameUser}!! <strong>${nameProv} ${lastNameProv} ha aceptado tu solicitud "${nameRequest}"</strong> para el servicio "${services}".</p>
      <p style="color: #666;">¡Estamos emocionados de que hayas encontrado el servicio que necesitas! Pronto recibirás más información sobre cómo proceder.</p>
      <h2 style="margin-top: 20px;">¡Gracias por elegirnos!</h2>
      <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
      <hr style="border: 1px solid #0D47A1;">
      <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
    </div>
  `;
  return contentHTML;
}


function notifyUserRequestRejected(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services) {
  const contentHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
      <h1 style="color: #333; text-align: center; margin-bottom: 20px;">¡Solicitud Rechazada!</h1>
      <hr style="border: 1px solid #0D47A1;">
      <p style="color: #666;">¡Lo sentimos, ${nameUser} ${lastNameUser}! <strong>${nameProv} ${lastNameProv} ha rechazado tu solicitud "${nameRequest}"</strong> para el servicio "${services}".</p>
      <p style="color: #666;">No te desanimes, puedes seguir buscando en nuestra plataforma para encontrar el servicio que necesitas.</p>
      <h2 style="margin-top: 20px;">¡Gracias por utilizar ServiApp!</h2>
      <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
      <hr style="border: 1px solid #0D47A1;">
      <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
    </div>
  `;
  return contentHTML;
}

function stateRequestUser(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services, result) {
  if (result === 'Aceptada') {
    return notifyUserRequestAccepted(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services);
  } else if (result === 'Rechazada') {
    return notifyUserRequestRejected(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services);
  }
}


module.exports = {
  notifyUserRequestAccepted,
  notifyUserRequestRejected,
  stateRequestUser
};
