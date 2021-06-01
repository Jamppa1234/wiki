const fs = require('fs');
const chalk = require('chalk');

const tiedosto = process.argv[2]

try {
    const dataBuffer = fs.readFileSync(tiedosto)
    const data = dataBuffer.toString()
    console.log(data)
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt'))
}