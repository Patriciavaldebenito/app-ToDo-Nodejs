// I n i c i o:
//const argv = require('yargs').argv;
//console.log(argv)
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);

let comando = argv._[0];
console.log('comando', comando)

switch (comando) {

    case 'crear':
        //console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=====POR HACER==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=====POR HACER==========='.green);
        }
        //console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        //console.log('Actualizar una tarea por  hacer');

        break;
        case 'borrar':
            let borrado = porHacer.borrar(argv.descripcion);
            console.log(borrado);
            break;


    default:
        console.log(' El comando no es reconocido');
}