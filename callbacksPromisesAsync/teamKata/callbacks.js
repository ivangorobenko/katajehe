const axios = require("axios");

const satellitesArray = [];
const loadSatellite = (satellite, callBack) => {
    axios
        .get(`http://localhost:8081/aerodromes/${satellite}`)

        .then(result => result.data)
        .then(satellite => {
            satellitesArray.push(satellite);
        })
        .then(() => console.log(satellitesArray))
        .then(() => callBack())
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
};

const loadSatellitesWithCallbacks = () => {
    loadSatellite("TEST", () =>
        loadSatellite("tLFMH", () =>
            loadSatellite("tLFCR", () => {
                console.log(satellitesArray);
            })
        )
    );
};

loadSatellitesWithCallbacks();
