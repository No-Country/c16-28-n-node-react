require('dotenv').config();
const nodemailer = require("nodemailer");
const welcomeUserTemplate = require("../Templates/welcomeUser");
const requestUserTemplate = require("../Templates/requestUser");
const requestProvTemplate = require("../Templates/requestProv");
const welcomeProvTemplate = require ("../Templates/welcomeProv");
const updatePerfilTemplate = require("../Templates/updatePerfil");
const {stateRequestUser} = require("../Templates/stateRequestUser");
const stateRequestProv = require("../Templates/stateRequestProv")

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
    subject: "Bienvenido a ServiApp",
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

// Registro del User
async function updatePerfil(name, email, lastName) {

  const mailOptions = {
    from: "Registro ServiApp <notcountry16@gmail.com>",
    to: email,
    subject: "Bienvenido a ServiApp",
    html: updatePerfilTemplate(name, lastName, email),
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
    subject: "Bienvenido a ServiApp",
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
    subject: "Recepcion de solicitud",
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
async function sendStateProv(nameProv, lastNameProv, nameRequest, services, result) {
  const mailOptions = {
    from: "Solicitud, ServiApp <notcountry16@gmail.com>",
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
async function sendStateUser(emailUser, nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services ,result) {
  const mailOptions = {
    from: "Solicitud, ServiApp <notcountry16@gmail.com>",
    to: emailUser,
    subject: "Estado de solicitud",
    html: stateRequestUser(nameUser, lastNameUser, nameProv, lastNameProv, nameRequest, services , result),
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
  sendRequestUser,
  sendRequestProv,
  sendStateProv,
  sendStateUser};
