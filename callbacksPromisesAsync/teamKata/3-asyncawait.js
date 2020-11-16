const {loadSatelliteToStore} = require("./loadSatelliteToStore");
const {satellitesStore} = require("./satellitesStore");

const loadAllSatellitesWithPromises = async () => {
    try {
        await loadSatelliteToStore("TEST");
        await loadSatelliteToStore("tLFMH");
        await loadSatelliteToStore("tLFCR");
        console.log(satellitesStore);
    } catch (error) {
        console.log(`un truc s'est mal passé ${error}`);
    }
};

loadAllSatellitesWithPromises();
