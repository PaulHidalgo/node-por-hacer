const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const estado = {
    demand: false,
    alias: 'e',
    desc: 'Filtro para listado de tareas'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('listar', 'Lista de tareas', {
        estado
    })
    .help()
    .argv;

module.exports = {
    argv
}