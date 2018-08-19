const axios = require('axios');
const weatherkey = require('../weatherkey.json');

const getClima = async (lat, lng) => {
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${weatherkey.key}`);

    if (respuesta.status === 200) {
        return respuesta.data.main.temp;
    }

    throw new Error('No se pudo obtener el clima');
}

module.exports = {
    getClima
}