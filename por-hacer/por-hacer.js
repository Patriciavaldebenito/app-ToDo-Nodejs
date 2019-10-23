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
        // console.log("list dentro de try cargarDB", ListPorHacer);
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

const actualizar = (descripcion, completado = true) => {
    // actualizar estado de la tarea en el documento json y 
    cargarDB();
    let index = ListPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //console.log("n", index)
    //let nameToDo = ListPorHacer.find(tarea => tarea.descripcion === descripcion);
    //console.log("nameToDo",nameToDo);

    if (index >= 0) {
        ListPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = ListPorHacer.filter(tarea =>
        tarea.descripcion != descripcion
    );
    // console.log(nuevoListado);
    if (ListPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        ListPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}