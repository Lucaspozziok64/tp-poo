/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
        if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            return ("Perteneces a la generación Silent Generation. Tu rasgo característico es la Austeridad😐");
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            return ("Perteneces a la generación Baby Boom. Tu rasgo característico es la Ambición🤑");
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            return ("Perteneces a la generación X. Tu rasgo característico es la Obsesion por el exito😎");
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            return ("Perteneces a la generación Y (millennials). Tu rasgo característico es la Frustración😖");
        } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
            return ("Perteneces a la generación Z. Tu rasgo característico es la Irreverencia😜");
        }
        else {
            return ("No perteneces a ninguna generación");
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return ("Eres mayor de edad.");
        }
        else {
            return ("Aun eres menor de edad.");
        }
    }

    mostrarDatos() {
        document.writeln(`<p>Tu nombre es: ${this.nombre}`);
        document.writeln(`<p>Tu edad es: ${this.edad} , ${this.esMayorDeEdad()}</p>`);
        document.writeln(`<p>Tu dni es: ${this.generarDni()}</p>`);
        document.writeln(`<p>Tu sexo es: ${this.sexo}</p>`);
        document.writeln(`<p>Tu peso es: ${this.peso}</p>`);
        document.writeln(`<p>Tu altura es: ${this.altura}</p>`);
        document.writeln(`<p>Tu año de nacimiento es: ${this.añoNacimiento}`);
        document.writeln(`<p>Tu generación es: ${this.mostrarGeneracion()}</p>`);
    }

    generarDni() {
        return this.dni = Math.floor(Math.random() * 99999999) + 10000000;
    }
}

const persona1 = new Persona("Lucas", 23, 232323, "Masculino", 85, 1.76, 2001);
persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.generarDni();
