// configurar los comandos 
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como competado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })

    .command('actualizar', 'Actualizar el estado completado de una tarea ', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea ', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}