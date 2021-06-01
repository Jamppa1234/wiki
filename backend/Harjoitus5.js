const fs = require('fs');

try {
    const dataBuffer = fs.readFileSync('./henkilo.json')
    const dataJSON = dataBuffer.toString()
    const henkilo = JSON.parse(dataJSON)

    henkilo.nimi = 'Kalle'
    henkilo.ika = 20

    const henkiloJSON = JSON.stringify(henkilo)

    fs.writeFileSync('henkilot.json', henkiloJSON)
} catch (e) {
    console.log('Tiedostoa ei löytynyt')
}