const fs =require('fs')
try {
    // luetaan json-tiedosto
    const dataBuffer = fs.readFileSync('./opiskelijat.json')
    // muutetaan buffer stringiksi
    const data = dataBuffer.toString()
    // muutetaan json-muodosta JavaScriptiin objektiksi
    const opiskelijat = JSON.parse(data)
    const aikuiset = palautaAikuiset(opiskelijat)
    // tulostetaan täysi-ikäiset nimet
    aikuiset.forEach((a) => console.log(a.nimi))
} catch (e) {
    console.log('Tiedostoa ei löytynyt')
}
 function palautaAikuiset (array) {
     console.log('TÄYSI-IKÄISET')
     return array.filter((opiskelijat) => opiskelijat.ika >= 18)
 }
