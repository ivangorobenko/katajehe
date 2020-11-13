const axios = require("axios");

const satellitesArray = [];
const loadSatellite = satellite =>
    axios
        .get(`http://localhost:8081/aerodromes/${satellite}`)

        .then(result => result.data)
        .then(satellite => {
            satellitesArray.push(satellite);
        })
        .catch(error => console.log(`un truc s'est mal passé ${error}`));

const loadAllSatellitesWithPromises = () => {
    loadSatellite("TEST")
        .then(() => loadSatellite("tLFMH"))
        .then(() => loadSatellite("tLFCR"))
        .then(() => console.log(satellitesArray))
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
};

loadAllSatellitesWithPromises();
