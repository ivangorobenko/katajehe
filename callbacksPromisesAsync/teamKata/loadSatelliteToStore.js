const axios = require("axios");

module.exports.loadSatelliteToStoreCallbacked = (satellite, callback) =>
    axios
        .get(`http://localhost:8081/aerodromes/${satellite}`)

        .then(result => result.data)
        .then(satellite => {
            if (callback) callback(satellite);
        })
        .catch(error => console.log(`un truc s'est mal passé ${error}`));

module.exports.loadSatelliteToStore = satellite =>
    axios
        .get(`http://localhost:8081/aerodromes/${satellite}`)

        .then(result => result.data)
        .then(satellite => satellite)
        .catch(error => console.log(`un truc s'est mal passé ${error}`));
