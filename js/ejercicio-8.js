/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }

    saludar() {
        document.writeln("<p>Estoy saludando...</p>");
    }

    despedirse() {
        document.writeln("<p>Me estoy despidiendo...</p>");
    }

    mostrarDatos() {
        document.writeln(`<p>Nombre: ${this.nombre}</p>`);
        document.writeln(`<p>Edad: ${this.edad}</p>`);
        document.writeln(`<p>Profesion: ${this.profesion}</p>`);
    }
}

document.writeln('<p>PERSONA</p>')
const persona1 = new Persona('Colapinto', '24', 'Conductor F1');
persona1.mostrarDatos();
persona1.saludar();
persona1.despedirse();