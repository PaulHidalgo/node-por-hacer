const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Actualiza el estado completado de una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}