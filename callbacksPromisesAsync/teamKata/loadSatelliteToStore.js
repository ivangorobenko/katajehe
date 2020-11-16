const axios = require("axios");
const {satellitesStore} = require("./satellitesStore");

module.exports.loadSatelliteToStore = (satellite, callback) =>
    axios
        .get(`http://localhost:8081/aerodromes/${satellite}`)

        .then(result => result.data)
        .then(satellite => {
            satellitesStore.push(satellite);
        })
        .then(() => {
            if (callback) callback();
        })
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
