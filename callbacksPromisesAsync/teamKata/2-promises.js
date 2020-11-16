const {loadSatelliteToStore} = require("./loadSatelliteToStore");
const {satellitesStore} = require("./satellitesStore");

const loadAllSatellitesWithPromises = () =>
    loadSatelliteToStore("TEST")
        .then(() => loadSatelliteToStore("tLFMH"))
        .then(() => loadSatelliteToStore("tLFCR"))
        .then(() => console.log(satellitesStore))
        .catch(error => console.log(`un truc s'est mal passé ${error}`));

loadAllSatellitesWithPromises();
