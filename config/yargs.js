// configurar los comandos 
const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de una tarea por hacer'
        }
    })

    .command('actualizar', 'Actualizar el estado completado de una tarea ', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de una tarea por hacer'
        }, 
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como competado o pendiente la tarea'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}