const {loadAllSatellitesWithCallbacks} = require("./1-callbacks");
const {loadAllSatellitesWithPromises} = require("./2-1-promises");
const {loadAllSatellitesWithPromiseAll} = require("./2-2-promises");
const {loadAllSatellitesWithAsyncAwait} = require("./3-asyncawait");
const {satellitesStoreForCallback} = require("./satellitesStoreForCallback");
const {satellitesStoreForPromises} = require("./satellitesStoreForPromises");
const {satellitesStoreForPromiseAll} = require("./satellitesStoreForPromiseAll");
const {satellitesStoreForAsyncAwait} = require("./satellitesStoreForAsyncAwait");

const main = async () => {
    await loadAllSatellitesWithCallbacks();
    await loadAllSatellitesWithPromises();
    await loadAllSatellitesWithPromiseAll();
    await loadAllSatellitesWithAsyncAwait();
    console.log(
        JSON.stringify(satellitesStoreForCallback) === JSON.stringify(satellitesStoreForPromises) &&
            JSON.stringify(satellitesStoreForPromises) === JSON.stringify(satellitesStoreForPromiseAll) &&
            JSON.stringify(satellitesStoreForPromiseAll) === JSON.stringify(satellitesStoreForAsyncAwait)
    );
};

main();
