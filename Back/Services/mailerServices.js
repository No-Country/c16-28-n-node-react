const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const welcomeTemplate = require("../Templates/welcomeUser");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

const OAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })


async function MailService(name, email, lastName) {

  const accessToken = await OAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      type: "OAuth2",
      user: "notcountry16@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken
    },

    tls: {
      rejectUnauthorized: false
    }
  })

  const sendMail = await transporter.sendMail({
    from: "Registro ServiApp <notcountry16@gmail.com>",
    to: email,
    subject: "Bienvenido a ServiApp",
    html: welcomeTemplate(name, lastName, email)
  })

  return sendMail

}

module.exports = MailService;