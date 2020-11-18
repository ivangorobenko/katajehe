const {loadSatelliteToStore} = require("./loadSatelliteToStore");
const {satellitesStoreForPromiseAll: satellitesStore} = require("./satellitesStoreForPromiseAll");

module.exports.loadAllSatellitesWithPromiseAll = () =>
    Promise.all([loadSatelliteToStore("TEST"), loadSatelliteToStore("tLFMH"), loadSatelliteToStore("tLFCR")])
        .then(result => {
            satellitesStore.push(result[0], result[1], result[2]);
        })
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
