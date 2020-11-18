const {loadSatelliteToStore} = require("./loadSatelliteToStore");
const {satellitesStoreForPromises: satellitesStore} = require("./satellitesStoreForPromises");

module.exports.loadAllSatellitesWithPromises = () =>
    loadSatelliteToStore("TEST")
        .then(satellite => satellitesStore.push(satellite))
        .then(() => loadSatelliteToStore("tLFMH"))
        .then(satellite => satellitesStore.push(satellite))
        .then(() => loadSatelliteToStore("tLFCR"))
        .then(satellite => satellitesStore.push(satellite))
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
