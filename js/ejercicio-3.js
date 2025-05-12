/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/


class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularPerimetro() {
        return 2* (this.alto + this.ancho);
    }
    
    calcularArea() {
        return this.alto * this.ancho;
    }

    mostrarPropiedades() {
        return (`<p>El alto del rectangulo es: ${this.alto} y el ancho es: ${this.ancho}</p>`);
    }

    modificarAlto(nuevoAlto) {
        if(nuevoAlto > 0) {
            this.alto = nuevoAlto;
        } else {
            alert('Ingrese un valor mayor a 0');
        }
    }

    modificarAncho(nuevoAncho) {
        if(nuevoAncho > 0) {
            this.ancho = nuevoAncho;
        } else {
            alert('Ingrese un valor mayor a 0');
        }
    }
}

const miRectangulo = new Rectangulo(10, 15);

document.writeln(miRectangulo.mostrarPropiedades());
document.writeln(`<p>El perimetro del rectangulo es: ${miRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>El area del rectangulo es: ${miRectangulo.calcularArea()}</p>`);

miRectangulo.modificarAlto(8);
miRectangulo.modificarAncho(12);

document.writeln(miRectangulo.mostrarPropiedades());
document.writeln(`<p>El nuevo perimetro del rectangulo es: ${miRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>Nueva area del rectangulo es: ${miRectangulo.calcularArea()}</p>`);