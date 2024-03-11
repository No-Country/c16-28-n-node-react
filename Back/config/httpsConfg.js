const path = require('path');
const https = require('https');
const fs = require('fs');

// const options =
//  {
//   key: fs.readFileSync(path.resolve(__dirname, '../../../ssl/privkey.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, '../../../ssl/fullchain.pem'))
// } 
const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'privkey.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'fullchain.pem'))
};

const httpsPort = process.env.PORT || 3001;

module.exports = function (app) {
  https.createServer(options, app).listen(httpsPort, () => {
    console.log(`Servidor HTTPS : ${httpsPort}`);
  });
};
