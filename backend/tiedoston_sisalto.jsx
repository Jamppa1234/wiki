const fs =require('fs')
//npm i chalk

const chalk =require ('chalk')

const tiedosto =process.argv[2]

try {
    const dataBuffer =fs.readFileSync(tiedosto)
    const data = datBuffer.toString()
    conslole.log(data)
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}