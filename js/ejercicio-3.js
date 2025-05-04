/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/


class rectangulo {
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

    mostrarpropiedades() {
        return (`<p>El alto del rectangulo es: ${this.alto} y el ancho es: ${this.ancho}</p>`);
    }
}


const miRectangulo = new rectangulo(5, 10);

document.writeln(miRectangulo.mostrarpropiedades());
document.writeln(`<p>El perimetro del rectangulo es: ${miRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>El area del rectangulo es: ${miRectangulo.calcularArea()}</p>`);