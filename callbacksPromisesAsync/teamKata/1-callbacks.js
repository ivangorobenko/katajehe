const {loadSatelliteToStoreCallbacked} = require("./loadSatelliteToStore");
const {satellitesStoreForCallback: satellitesStore} = require("./satellitesStoreForCallback");

module.exports.loadAllSatellitesWithCallbacks = () => {
    loadSatelliteToStoreCallbacked("TEST", satellite => {
        satellitesStore.push(satellite);
        return loadSatelliteToStoreCallbacked("tLFMH", satellite => {
            satellitesStore.push(satellite);
            return loadSatelliteToStoreCallbacked("tLFCR", satellite => {
                satellitesStore.push(satellite);
            });
        });
    });
};
