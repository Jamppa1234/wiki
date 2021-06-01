const fs = require('fs');
const dataBuffer = fs.readFileSync('./olio.json');

const dataJSON = dataBuffer.toString();
const olio = JSON.parse(dataJSON);

olio.ika = 25
olio.osoite = 'Koulukatu'

olioJSON = JSON.stringify(olio)

fs.writeFileSync('olio.json', olioJSON)