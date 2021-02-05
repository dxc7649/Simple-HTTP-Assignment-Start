const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'image/png',
  }); // write a status code
  response.write(spongegar);
  response.end();
};

module.exports.getImage = getImage;
