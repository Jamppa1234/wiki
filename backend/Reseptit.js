const fs = require('fs');

const lisaaResepti = function (nimi, ainekset) {
    const reseptit = lataaReseptit()
    const onOlemassa = reseptit.find(resepti => resepti.nimi === nimi && resepti.ainekset === ainekset)

    if (!onOlemassa) {
        reseptit.push({nimi, ainekset
})
        tallennaReseptit(reseptit)
        console.log('Resepti lisätty resepteihin!')

    }  else {
        console.log('Resepti on jo olemassa, ei lisätty reseptikirjastoon.')
    }
   
}

const tallennaReseptit = function(reseptit) {
    const reseptitJSON = JSON.stringify(reseptit)
    fs.writeFileSync('reseptit.json',reseptitJSON)

}

const lataaReseptit = function () {
    try {
        const dataBuffer = fs.readFileSync('reseptit.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const poistaResepti = (nimi, ainekset) => {
    const reseptit = lataaReseptit();
    const onOlemassa = reseptit.find((resepti) => resepti.nimi === nimi && resepti.ainekset === ainekset);
    if (onOlemassa) {
      reseptit.splice(reseptit.indexOf(onOlemassa),1)
      tallennaReseptit(reseptit)
      console.log("Resepti on poistettu reseptikirjastosta");
    } else {
      console.log("Reseptiä ei löytynyt reseptikirjastosta!");
    }
  };

  const haeResepti = (nimi) => {
    const reseptit = lataaReseptit();
    const haettuResepti = reseptit.find(
      (resepti) => resepti.nimi === nimi
    );
    if (haettuResepti) {
      console.log(`${haettuResepti.nimi}`);
    } else {
        console.log("Reseptiä ei löytynyt.")
    }
  };

  const listaaReseptit = () => {
    const reseptit = lataaReseptit();
    reseptit.forEach((element) => {
      console.log(element.nimi + " - " + element.ainekset);
    });
  };

module.exports = {
     lisaaResepti: lisaaResepti,
     tallennaReseptit: tallennaReseptit,
     lataaReseptit: lataaReseptit,
     poistaResepti: poistaResepti,
     haeResepti: haeResepti,
     listaaReseptit: listaaReseptit
};