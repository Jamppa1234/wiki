const fs = require('fs')
const chalk = require ('chalk')

const nimi = process.argv[2]

try {
    const dataBuffer = fs.readFileSync('./nimet.json')
    const data = dataBuffer.toString()
    if (data.includes(nimi)){
        console.log(chalk.green('Nimi löytyi!'))
    } else {
        console.log(chalk.red('Nimeä ei löytynyt!'))
    }
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}