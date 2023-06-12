const axios = require('axios')

const getCityesByCountryCode = (market="") => {
    return axios
        .get(`https://airlabs.co/api/v9/cities?country_code=${market}&api_key=${process.env.AIRLABS}`)
        .then((response) => {
            return response.data.response;
        })
        .catch((error) => {
            console.error(error);
        });
};

const getCityByAirportCode = (airportcode="") => {
    return axios.get(`https://airlabs.co/api/v9/airports?iata_code=${airportcode}&api_key=${process.env.AIRLABS}`)
        .then((response) => {
            return response.data.response;
        })
        .catch((error) => {
            console.error(error);
        });
};
module.exports = {
    getCityesByCountryCode,
    getCityByAirportCode
}