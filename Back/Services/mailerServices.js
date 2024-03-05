require('dotenv').config();
const nodemailer = require("nodemailer");
const welcomeUserTemplate = require("../Templates/welcomeUser");
const requestUserTemplate = require("../Templates/requestUser");
const requestProvTemplate = require("../Templates/requestProv");
const welcomeProvTemplate = require ("../Templates/welcomeProv");
const updatePerfilTemplate = require("../Templates/updatePerfil");
const {stateRequestUser} = require("../Templates/stateRequestUser");
const stateRequestProv = require("../Templates/stateRequestProv");
const registerAndVerifyTemplate = require("../Templates/verificationTemplate")
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY2;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Registro del User
async function registerUser(name, email, lastName) {

  const mailOptions = {
    from: "Registro ServiApp <notcountry16@gmail.com>",
    to: email,
    subject: "Bienvenid@ a ServiApp",
    html: welcomeUserTemplate(name, lastName, email),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

// Update de Perfil :
async function updatePerfil(emaiL , namE , lastNamE){

  const mailOptions = {
    from: "Actualización de Perfil en ServiApp <notcountry16@gmail.com>",
    to: emaiL,
    subject: "Modificaciones en tu perfil",
    html: updatePerfilTemplate(emaiL , namE , lastNamE),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

// Registro del Proveedor
async function registerProv(name, email, lastName) {

  const mailOptions = {
    from: "Registro ServiApp <notcountry16@gmail.com>",
    to: email,
    subject: "Bienvenid@ a ServiApp",
    html: welcomeProvTemplate(name, lastName, email),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

async function sendVerificationEmailUser(user) {
  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '30m' });
  user.verificationToken = token;
  await user.save();

  const verificationLink = `https://dev.serviapp.solutions:3001/verificar?token=${token}`;

  const mailOptions = {
    from: "ServiApp <notcountry16@gmail.com>",
    to: user.email,
    subject: "Confirma tu correo electrónico",
    html:registerAndVerifyTemplate(user.name, user.lastName, verificationLink)
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico de verificación enviado:', sendMail);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de verificación:', error);
    throw error;
  }
}

async function sendVerificationEmailProv(provider) {
  const token = jwt.sign({ id: provider.id }, secretKey, { expiresIn: '30m' });
  provider.verificationToken = token;
  await provider.save();

  const verificationLink = `https://dev.serviapp.solutions:3001/verificar?token=${token}`;

  const mailOptions = {
    from: "ServiApp <notcountry16@gmail.com>",
    to: provider.email,
    subject: "Confirma tu correo electrónico",
    html:registerAndVerifyTemplate(provider.name, provider.lastName, verificationLink)
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico de verificación enviado:', sendMail);
  } catch (error) {
    console.error('Error al enviar el correo electrónico de verificación:', error);
    throw error;
  }
}


//Request pal User
async function sendRequestUser(emailUser, nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services) {
  const mailOptions = {
    from: "Solicitud, ServiApp <notcountry16@gmail.com>",
    to: emailUser,
    subject: "Confirmación de solicitud",
    html: requestUserTemplate(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

//Request pal prov
async function sendRequestProv(emailProv, nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services) {
  const mailOptions = {
    from: "Solicitud, ServiApp <notcountry16@gmail.com>",
    to: emailProv,
    subject: "Recepción de solicitud",
    html: requestProvTemplate(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

//Notificar resultado de la solicitud (Prov):
async function sendStateProv( emailProv, nameProv, lastNameProv, nameRequest, services, result) {
  
  const mailOptions = {
    from: "Resultado de solicitud, ServiApp <notcountry16@gmail.com>",
    to: emailProv,
    subject: "Estado de solicitud",
    html: stateRequestProv(nameProv, lastNameProv, nameRequest, services, result),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

//Notificar resultado de la solicitud (User):
async function sendStateUser( emailUser, nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services ,result) {

  const mailOptions = {
    from: "Resultado de Solicitud, ServiApp <notcountry16@gmail.com>",
    to: emailUser,
    subject: "Estado de solicitud",
    html: stateRequestUser( nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services ,result),
  };

  try {
    const sendMail = await transporter.sendMail(mailOptions);
    return sendMail;
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    throw error;
  }
}

module.exports = {
  registerUser,
  registerProv,
  updatePerfil,
  sendVerificationEmailUser,
  sendVerificationEmailProv,
  sendRequestUser,
  sendRequestProv,
  sendStateProv,
  sendStateUser};
