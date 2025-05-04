/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }

    get isbn() {
        return this._isbn;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get numPaginas() {
        return this._numPaginas;
    }

    mostrarLibro() {
        document.writeln(`<p>El libro <b>${this._titulo}</b> con ISBN <b>${this._isbn}</b> creado por el autor <b>${this._autor}</b> tiene páginas <b>${this._numPaginas}</b></p>`);
    }
}

const libro1 = new Libro("1234567890", "Las 48 leyes del poder", "Robert Greene", 526);

libro1.mostrarLibro();