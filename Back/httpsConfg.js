const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('falta la clave_privada.pem'),
  cert: fs.readFileSync(' falta el certificado_ssl.pem')
};

const httpsPort = process.env.HTTPS_PORT || 443;

module.exports = function (app) {
  https.createServer(options, app).listen(httpsPort, () => {
    console.log(`Servidor HTTPS : ${httpsPort}`);
  });
};
