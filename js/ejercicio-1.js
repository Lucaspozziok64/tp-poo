/*
Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
    color: 'Rojo',
    marca: 'Ford',
    modelo: 'ka',
    encendido: false,
    encender: function(){
        this.encendido = true;
        document.writeln('<h3>El auto se encendió</h3>');
    },
    apagar: function(){
        this.encendido = false;
        document.writeln('<h3>El auto se apagó</h3>');
    }
}

auto.encender();
auto.apagar();