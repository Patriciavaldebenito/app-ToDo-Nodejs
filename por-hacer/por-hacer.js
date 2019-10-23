const fs = require('fs');
const colors = require('colors');

let ListPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(ListPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(`No se pudo grabar ${data}`, err);
    });
}

const cargarDB = () => {
    try {
        ListPorHacer = require('../db/data.json');
        console.log("list dentro de try", ListPorHacer);
    } catch (error) {
        ListPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    ListPorHacer.push(porHacer);

    guardarDB();


    return porHacer;
}

const getListado = () => {
   // 1era opcion return ListPorHacer;
   cargarDB();
   return ListPorHacer;
}

module.exports = {
    crear,
    getListado
}