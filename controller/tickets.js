const axios = require('axios')
const dotenv = require("dotenv");
dotenv.config()

const searchTickets = (market,
currency,
limit,
fromCity,
toCity,
fromDate,
toDate,
reSit,
sorting, oneWay, page)=>{
try {
    const unique = (fromCity.length > 0 && toCity === '')
    return axios.get(`https://api.travelpayouts.com/aviasales/v3/prices_for_dates?market=${market}&origin=${fromCity}&destination=${toCity}&departure_at=${fromDate}&return_at=${toDate}&unique=${unique}&sorting=${sorting}&direct=${reSit}&currency=${currency}&limit=${limit}&page=${page+1}&one_way=${oneWay}&token=${process.env.AVIATOKEN}`)
        .then(response => {
            return response.data.data
        })
} catch (e){
    return e.data
}
}

const airLineCompanyByCodeAirlineCode = (airLineCode)=>{
    return axios.get(`https://airlabs.co/api/v9/airlines?iata_code=${airLineCode}&api_key=${process.env.AIRLABS}`)
        .then(response => {
            return response.data.response
        })
        .catch(error => {
            console.error('Ошибка!');
        });
}

module.exports = {
    searchTickets,
    airLineCompanyByCodeAirlineCode
}