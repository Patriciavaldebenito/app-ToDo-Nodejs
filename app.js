// I n i c i o:
//const argv = require('yargs').argv;
//console.log(argv)
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);

let comando = argv._[0];
console.log('comando',comando)

switch (comando) {

    case 'crear':
        console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
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