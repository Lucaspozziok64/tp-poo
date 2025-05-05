/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamaño = 10) {
        this.tamaño = tamaño;
        this.contactos = [];
    }

    añadirContacto(contacto) {
        this.contactos.push(contacto);
        document.writeln(`<p>Contacto <b>${contacto.nombre}</b> añadido correctamente</p>`);
        return true;
    }
}

const agenda = new Agenda();

let opcion;
do {
    const opcion = parseInt(prompt(`Agenda Telefonica
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Ver huecos libres
        6. Salir
        Seleccione una opción:`));

    switch (opcion) {
        case 1:
            const nombre = prompt("Introduce el nombre del contacto:");
            const telefono = prompt("Introduce el teléfono del contacto:");
            if(nombre && telefono) {
                agenda.añadirContacto(new Contacto(nombre, telefono));
                alert('Contacto añadido correctamente')
            } else {
                alert("Nombre y teléfono son obligatorios");
            }
            break;
        case 6:
            alert("Hasta pronto");
            break;
        default:
            alert("Opción no válida");
    } 
}while (confirm("¿Deseas realizar otra operación?"));