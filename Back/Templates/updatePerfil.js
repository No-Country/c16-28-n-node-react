function updateTemplate(name, lastName, email) {
    const contentHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
    <h1 style="color: #fff; background-color: #FF6F00; padding: 10px; margin-bottom: 20px;">¡Has modificado tu perfil!</h1>
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;"><strong>${name} ${lastName}</strong>, hemos recibido la modificación de tu perfil correctamente. Tus modificaciones con el correo <strong>${email}</strong> ha sido actualizado exitosamente.</p>
    <p style="color: #666;">Ya puedes continuar utilizando nuestra plataforma con tu perfil actualizado.</p>
    <h2>¡Gracias por confiar en nosotros!</h2>
    <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
    <hr style="border: 1px solid #0D47A1;">
    <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
  </div>
  
    `;
    return contentHTML;
  }
  
  module.exports = updateTemplate;
  