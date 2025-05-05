/*
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    emitirSonido() {
        console.log(`Estoy emitiendo sonido...`)
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre,edad)
    }

    emitirSonido() {
        document.writeln(`<p>Soy 🐶 ${this.nombre} y Estoy ladrando...</p>`);
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido() {
        document.writeln(`<p>Soy 😺 ${this.nombre} Miauuuu...</p>`);
    }
}

const miPerro = new Perro('Budy', 5);
miPerro.emitirSonido();

const miGato = new Gato('Garfield', 7);
miGato.emitirSonido();