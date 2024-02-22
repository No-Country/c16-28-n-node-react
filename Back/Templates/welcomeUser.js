function welcomeTemplate(name, lastName, email) {
  return contentHTML = `
    <h1>¡Hola ${name} ${lastName}, bienvenido a ServiApp!<h1>
    <p>Te has registrado con el correo ${email}, mas adelante te pediremos que completes tus datos en el siguiente link<p>
  `
}

module.exports = welcomeTemplate;