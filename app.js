//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
//console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'crear':
        console.log('crear por hacer');
        break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        console.log('Actualizar una tarea por  hacer');
        break;

    default:
        console.log(' El comando no es reconocido');
}