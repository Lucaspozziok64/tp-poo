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
        document.writeln(`<p>Nombre: <b>${this.nombre}</b></p>`);
        document.writeln(`<p>Edad: <b>${this.edad}</b></p>`);
        document.writeln(`<p>Profesion: <b>${this.profesion}</b></p>`);
    }
}

document.writeln('<p>PERSONA</p>')
const persona1 = new Persona('Colapinto', '24', 'Conductor F1');
persona1.mostrarDatos();
persona1.saludar();
persona1.despedirse();

const persona2 = new Persona('Elon Musk', '53', 'Empresario, Fundador');
persona2.mostrarDatos();
persona2.saludar();
persona2.despedirse();