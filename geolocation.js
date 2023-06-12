const axios = require('axios');

const aviasalesApiEndpoint = 'https://api.travelpayouts.com/data/ru/cities.json';

const getCityes = async (locale = 'ru', country = 'KZ') => {
    try {
        const response = await axios.get(aviasalesApiEndpoint, {
            params: {
                locale: locale,
                country: country
            }
        });

        const cities = response.data;
        return cities;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
// getCityes()
module.exports = {
    getCityes
};