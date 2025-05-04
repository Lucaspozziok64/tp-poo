/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(){
        const cantidad = parseInt(prompt('Ingrese la cantidad a depositar'));
        if(!isNaN(cantidad) && cantidad > 0) {
            this.saldo += cantidad;
            alert(`Se ingresaron ${cantidad}, Nuevo saldo: ${this.saldo}`)
        } else {
            alert('Ingrese una cantidad válida')
        }
        document.writeln(`<h3>Se ha ingresado ${cantidad} a la cuenta</h3>`);
    }
    ,extraer: function(){
        const cantidad = parseInt(prompt('Ingrese la cantidad a retirar'));
        if(!isNaN(cantidad) && cantidad >= cantidad) {
            if(this.saldo >= cantidad) {
                this.saldo -= cantidad;
                alert(`Se retiraron ${cantidad}, Nuevo saldo: ${this.saldo}`);
            } else {
                alert('Saldo insuficiente');
            }
        } else {
            alert('Ingrese una cantidad válida');
        }
        document.writeln(`<h3>Se ha retirado ${cantidad} de la cuenta</h3>`);
    }
    ,informar: function(){
        document.writeln(`<h3>El saldo de la cuenta es de:  $${this.saldo}</h3>`);
    }

}

document.writeln(`<h3>El titular de la cuenta es: ${cuenta.titular}</h3>`);
cuenta.informar();
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();