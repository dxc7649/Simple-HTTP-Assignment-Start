const fs = require('fs'); // pull in the file system module to read and write from files

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
// __dirname is a global in Node of whichever folder this file is in

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // write a status code
  response.write(index);
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex; // Put both functions into module.exports to make them public
module.exports.getPage2 = getPage2;
