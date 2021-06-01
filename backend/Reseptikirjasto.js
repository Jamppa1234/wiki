const yargs = require('yargs');
const reseptit = require('./reseptit')

yargs.command({
    command: 'lisaa',
    description: 'Lisää uusi resepti',
    builder: {
        nimi: {
            type: 'string',
            demandOptio: true,
            describe: 'Reseptin nimi'
        },
        ainekset: {
            type: 'array',
            demandOption: true,
            describe: 'Reseptin ainekset'
        }
       
    },
    handler(argv) {
        reseptit.lisaaResepti(argv.nimi, argv.ainekset)
    }
})

yargs.command({
    command: "poista",
    description: "Poista resepti",
    builder: {
      nimi: {
        type: "string",
        demandOption: true,
        describe: "Reseptin nimi",
      },
      ainekset: {
        type: "array",
        demandOption: true,
        describe: "Reseptin ainekset",
      },
    },
  
    handler(argv) {
      reseptit.poistaResepti(argv.nimi, argv.ainekset);
    },

})

  yargs.command({
    command: "listaa",
    description: "Listaa reseptit",
  
    handler() {
      reseptit.listaaReseptit()
    },
})
  

yargs.parse()