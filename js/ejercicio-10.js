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
            document.writeln(`<h3>Avion econtrado: ${avionBuscado.nombre}, Capacidad: ${avionBuscado.capacidad}, Destino: ${avionBuscado.destino}</h3>`);
            return avionBuscado;
        } else {
            document.writeln(`No se encontro el avion ${nombre}`);
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
            document.writeln(`<p><b>${pasajero}</b> ha aborado con éxito en el avión <b>${this.nombre}</b></p>`);
        } else {
            document.writeln(`El Avión ${this.nombre} está lleno. ${pasajero} no puede aboradar`);
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

const avionEncontrado = aeropuerto.buscarAvion("JetSmart");

if (avionEncontrado) {
    avionEncontrado.abordar("Lucas Figueroa");
    avionEncontrado.abordar("Juan Perez");
    avionEncontrado.abordar("Ana Gomez");
    avionEncontrado.abordar("Pedro Rodriguez");
    avionEncontrado.abordar("Maria Fernandez");
} else {
    document.writeln("No se encontró el avión");                     
}
