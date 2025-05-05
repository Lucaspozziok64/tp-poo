/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }

    imprimeDatos() {
        return (`<p>Datos del objeto: Codigo <b>${this.codigo}</b> Nombre: <b>${this.nombre}</b> Precio: $<b>${this.precio}</b></p>`);
    }
}

const productos = [];

productos.push(new Producto('#213213', 'Venzo', 700000));
productos.push(new Producto('#232424', 'Nike', 80000));
productos.push(new Producto('#434345', 'Lacoste', 60000));

for(let i = 0; i < productos.length; i++) {
    document.writeln(productos[i].imprimeDatos());
}
