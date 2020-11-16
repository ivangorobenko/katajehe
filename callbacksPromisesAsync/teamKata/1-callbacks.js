const {loadSatelliteToStore} = require("./loadSatelliteToStore");
const {satellitesStore} = require("./satellitesStore");

const loadSatellitesWithCallbacks = () => {
    loadSatelliteToStore("TEST", () =>
        loadSatelliteToStore("tLFMH", () =>
            loadSatelliteToStore("tLFCR", () => {
                console.log(satellitesStore);
            })
        )
    );
};

loadSatellitesWithCallbacks();
