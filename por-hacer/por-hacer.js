const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];

    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = (estado) => {
    cargarDB();
    if (estado === undefined) {
        return listadoPorHacer;
    } else {
        let listadoFiltrado = listadoPorHacer.filter(tarea => tarea.completado.toString() === estado.toString());
        return listadoFiltrado;
    }

};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


    // cargarDB();
    // let index = listadoPorHacer.indexOf(descripcion);

    // if (index >= 0) {
    //     listadoPorHacer.splice(index, 1);
    // }

    // let indexVerify = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    // if (indexVerify >= 0) {
    //     return false;
    // } else {
    //     return true;
    // }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}