const {loadSatelliteToStoreCallbacked} = require("./loadSatelliteToStore");
const {satellitesStoreForCallback: satellitesStore} = require("./satellitesStoreForCallback");

module.exports.loadAllSatellitesWithCallbacks = () => {
    loadSatelliteToStoreCallbacked("TEST", (error, satellite) => {
        satellitesStore.push(satellite);
        return loadSatelliteToStoreCallbacked("tLFMH", (error, satellite) => {
            satellitesStore.push(satellite);
            return loadSatelliteToStoreCallbacked("tLFCR", (error, satellite) => {
                satellitesStore.push(satellite);
            });
        });
    });
};
