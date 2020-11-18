const {satellitesStoreForAsyncAwait: satellitesStore} = require("./satellitesStoreForAsyncAwait");
const {loadSatelliteToStore} = require("./loadSatelliteToStore");

module.exports.loadAllSatellitesWithAsyncAwait = async () => {
    try {
        satellitesStore.push(await loadSatelliteToStore("TEST"));
        satellitesStore.push(await loadSatelliteToStore("tLFMH"));
        satellitesStore.push(await loadSatelliteToStore("tLFCR"));
    } catch (error) {
        console.log(`un truc s'est mal passé ${error}`);
    }
};
