// I n i c i o:
//const argv = require('yargs').argv;
//console.log(argv)
const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');
//console.log(argv);

let command = argv._[0];
console.log('command', command)

switch (command) {

    case 'create':
        //console.log('create por hacer');
        let
            task = toDo.create(argv.description);
        console.log(
            task);
        break;

    case 'toList':
        let list = toDo.getList();
        for (let
            task of list) {
            console.log('=====POR HACER==========='.green);
            console.log(task.description);
            console.log('Estado:', task.completed);
            console.log('=====POR HACER==========='.green);
        }
        //console.log('Mostrar todas las tasks por hacer');
        break;

    case 'update':
        let update = toDo.update(argv.description, argv.completed);
        console.log(update);
        //console.log('Actualizar una task por  hacer');

        break;
    case 'delete':
        let taskClear = toDo.deleteTask(argv.description);
        console.log(taskClear);
        break;


    default:
        console.log(' El command no es reconocido');
}