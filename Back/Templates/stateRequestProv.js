function notifyProviderRequestDecision( nameProv, lastNameProv, nameRequest, services, result) {
    const contentHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <h1  style="color: #fff;margin-bottom: 20px; background-color: #FF6F00; padding: 10px;">¡Solicitud ${result}!</h1>
        <hr style="border: 1px solid #0D47A1;">
        <p style="color: #666;">${nameProv} ${lastNameProv} has marcado como <strong>${result}<strong/> la solicitud "${nameRequest}" para el servicio "${services}".</p>
        <p style="color: #666;">Gracias por tu pronta respuesta, se le notificará al usuario tu decisión.</p>
        <h2>¡Gracias por utilizar ServiApp!</h2>
        <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
        <hr style="border: 1px solid #0D47A1;">
        <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>

      </div>
    `;
    return contentHTML;
}

module.exports = notifyProviderRequestDecision;