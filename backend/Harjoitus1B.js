const fs = require('fs');

fs.writeFile('uusitiedosto.txt', 'Moikka Mualima!', function (err) {
    if (err) throw err;
    console.log('Talletettu!');
});