function requestUserTemplate(nameUser, lastNameUser,nameProv, lastNameProv, nameRequest, services) {
    const contentHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
    <h1 style="color: #fff; margin-bottom: 20px; background-color: #FF6F00; padding: 10px;">¡Has realizado una solicitud!</h1>
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;">${nameUser} ${lastNameUser}, la solicitud <strong>${nameRequest}</strong> por el servicio <strong>${services}</strong> al profesional <strong>${lastNameProv} ${nameProv}</strong> fue realizada exitosamente.</p>
    <p style="color: #666;">En este momento, estamos contactandolo para poder acercarte su contacto.</p>
    <p style="color: #666;">Apenas tengamos una respuesta de él, te enviaremos la información de contacto.</p>
    <h2>¡Muchas gracias por elegirnos!</h2>
    <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
  </div>
  
    `;
    return contentHTML;
  }
  
  module.exports = requestUserTemplate;
  