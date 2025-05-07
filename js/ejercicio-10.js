/*
crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

//crear clase Aeropuerto con propiedades: nombreAeropuerto y lista de aviones, admeas metodo: agregarAvion y buscarAvion
// Clase avion con propiedades: nombre, capacidad, destino, lista de pasajeros, metodo: abordar
//Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos.
// Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaDeAviones = [];
    }

    agregarAvion(avion) {
        this.listaDeAviones.push(avion);
    }

    buscarAvion(nombre) {
        const avionBuscado = this.listaDeAviones.find(avion => avion.nombre === nombre);
        if(avionBuscado) {
            console.log(`Avion econtrado: ${avionBuscado.nombre}, Capacidad: ${avionBuscado.capacidad}, Destino: ${avionBuscado.destino}`);
            return avionBuscado;
        } else {
            console.log(`No se encontro el avion ${nombre}`);
            return null;
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaDePasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaDePasajeros.length < this.capacidad) {
            this.listaDePasajeros.push(pasajero);
            console.log(`${pasajero} ha aborado con éxito en el avión ${this.nombre}`);
        } else {
            console.log(`El Avión ${this.nombre} está lleno. ${pasajero} no puede aboradar`);
        }
    }
}

const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Aerolineas Argentinas ", 100, "New York");
const avion2 = new Avion("JetSmart", 150, "Londres");
const avion3 = new Avion("flyBondy", 200, "Tokio");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);
