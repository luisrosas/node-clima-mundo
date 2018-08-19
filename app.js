const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima'
        }
    })
    .argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async (direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima para ${coors.direccion} es: ${temp}ºC`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e.message));