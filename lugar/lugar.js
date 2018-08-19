const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    let encodeUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = respuesta.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}
