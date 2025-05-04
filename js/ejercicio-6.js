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
    constructor(Isbn, Titulo, Autor, NumPaginas) {
        this.isbn = Isbn;
        this.titulo = Titulo;
        this.autor = Autor;
        this.numPaginas = NumPaginas;
    }

    get Isbn() {
        return this.isbn;
    }

    set Isbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }

    get Titulo() {
        return this.titulo;
    }

    set Titulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;                  
    }

    get Autor() {
        return this.autor;
    }

    set Autor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    get NumPaginas() {
        return this.numPaginas;
    }

    set NumPaginas(nuevoNumPaginas) {
        this.numPaginas = nuevoNumPaginas;
    }

    mostrarLibro() {
        document.writeln(`<p>El libro <b>${this.titulo}</b> con ISBN <b>${this.isbn}</b> creado por el autor <b>${this.autor}</b> tiene páginas <b>${this.numPaginas}</b></p>`);
    }
}

const libro1 = new Libro("1234567890", "Las 48 leyes del poder", "Robert Greene", 526);
const libro2 = new Libro("0987654321", "Meditaciones", "Marco Aurelio", 232);

libro1.mostrarLibro();
libro2.mostrarLibro();

if( libro1.NumPaginas > libro2.NumPaginas) {
    document.writeln(`<p>El libro <b>${libro1.Titulo}</b> tiene más páginas que el libro <b>${libro2.Titulo}</b></p>`);
} else {
    document.writeln(`<p>El libro <b>${libro2.Titulo}</b> tiene más páginas que el libro <b>${libro1.Titulo}</b></p>`);
}