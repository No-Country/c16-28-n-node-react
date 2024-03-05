function registerAndVerifyTemplate(name, lastName, verificationLink) {
    const contentHTML =`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
        <h1 style="color: #fff; margin-bottom: 20px; background-color: #FF6F00; padding: 10px;">¡Bienvenido a ServiApp!</h1>
        <hr style="border: 1px solid #0D47A1;">
        <p style="color: #666;"><strong>${name} ${lastName}</strong>, gracias por registrarte en ServiApp. Para completar tu registro, haz clic en el siguiente enlace:</p>
        <p style="color: #666;"><a href="${verificationLink}" style="color: #007bff; text-decoration: none;">Verificar correo electrónico</a></p>
        <p style="color: #666;">Si no has solicitado este registro, puedes ignorar este correo.</p>
        <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
        <hr style="border: 1px solid #0D47A1;">
        <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
      </div>
    `
    return contentHTML;
  }
  
  module.exports = registerAndVerifyTemplate;