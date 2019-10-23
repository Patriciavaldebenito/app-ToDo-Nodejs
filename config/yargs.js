// configurar los comandos 
const
    description = {
        demand: true,
        alias: 'd',
        desc: 'Descripción de una task por hacer'
    }

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca como competado o pendiente la task'
}

const argv = require('yargs')
    .command('create', 'create un elemento por hacer', {

        description
    })

    .command('update', 'Actualizar el estado completed de una task ', {

        description,
        completed
    })
    .command('delete', 'delete una task ', {

        description
    })
    .help()
    .argv;

module.exports = {
    argv
}