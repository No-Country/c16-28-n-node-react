function welcomeUserTemplate(name, lastName, email) {
  const contentHTML = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; text-align: center;">
  <h1 style="color: #fff; margin-bottom: 20px; background-color: #FF6F00; padding: 10px;">¡Bienvenido a ServiApp!</h1>
  <hr style="border: 1px solid #0D47A1;">
  <p style="color: #666;"><strong>${name} ${lastName}</strong>, estamos emocionados de tenerte como parte de nuestra comunidad. Tu registro con el correo <strong>${email}</strong> ha sido exitoso.</p>
  <p style="color: #666;">Ya puedes completar tu perfil y empezar a utilizar nuestra plataforma para conectar con proveedores de servicios.</p>
  <h2>¡Muchas gracias por elegirnos!</h2>
  <a href="#" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; margin-top: 20px; border-radius: 5px;">Completar perfil</a>
  <img src="https://res.cloudinary.com/dq9icw8vb/image/upload/v1709388024/mczmuz3tirvjkm1cvtjg.png" alt="" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
  <hr style="border: 1px solid #0D47A1;">
  <p style="color: #666;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
  </div>

  `;
  return contentHTML;
}

module.exports = welcomeUserTemplate;
