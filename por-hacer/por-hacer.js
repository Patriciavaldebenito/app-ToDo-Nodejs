const fs = require('fs');
const colors = require('colors');

let listToDo = [];

const   saveDB = () => {

    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(`No se pudo grabar ${data}`, err);
    });
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
        // console.log("list dentro de try loadDB", listToDo);
    } catch (error) {
        listToDo= [];
    }
}

const create = (
    description) => {

    loadDB();

    let toDo = {

        description,
        completed: false
    };

    listToDo.push(toDo);

   saveDB();


    return toDo;
}

const getList = () => {
    // 1era opcion return listToDo;
    loadDB();
    return listToDo;
}

const update = (
    description, completed = true) => {
    // update estado de la task en el documento json y 
    loadDB();
    let index = listToDo.findIndex(
task => 
task.description ===  description);
    //console.log("n", index)
    //let nameToDo = listToDo.find(task => task. description === description);
    //console.log("nameToDo",nameToDo);

    if (index >= 0) {
        listToDo[index].completed = completed;
       saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (
    description) => {
    loadDB();
    let nuevoListado = listToDo.filter(
task =>  
task. description != description  );
    // console.log(nuevoListado);
    if (listToDo.length === nuevoListado.length) {
        return false;
    } else {
        listToDo= nuevoListado;
       saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleteTask
}