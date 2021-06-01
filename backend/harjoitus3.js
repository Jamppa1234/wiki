const validator = require('validator');
const chalk = require('chalk');

const osoite = process.argv[2]

if (validator.isEmail(osoite)) {
    console.log(chalk.green('kelvollinen sähköpostiosoite'))
} else {
    console.log(chalk.red('epäkelpo sähköpostiosoite'))
}