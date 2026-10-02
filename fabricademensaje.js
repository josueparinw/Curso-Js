/*
* 
* 1. Fábrica de mensajes con firma
* 
* Crea una función llamada "crearMensajero". Crea una donde almacenaremos el nombre de un usuario (mensajero).
* Luego crea una función que asigne valor a esa variable de nombre. Finalmente, crearMensajero debe de retornar una 
* función que muestre por consola el mensaje con la firma del autor al final.
* 
* ejemplo de uso:
* 
* mensajero = crearMensajero()
* mensajero.asignarUsuario("nombre")
* mensajero.mensaje() => Hola a todos - firmado: {nombre}
*/

function crearMensajero(){
    let nombre=""

    function añadirNombre(nuevonnombre){
        nombre=nuevonnombre
    }

    function mensaje(){
        console.log(`hola a todos - firma ${nombre}`)
    }
    return{
        añadirNombre,
        mensaje
    }
}
const mensajero =crearMensajero();
mensajero.añadirNombre("cris");
mensajero.mensaje();

/*
* 2. Calculadora de IVA
* 
* Crea una función llamada "calculadoraIVA" la cual debe de recibir como parámetro un IVA (valor numérico int)
* 
* esta función debe de retornar una función interior. Esta función interior debe de recibir como parámetro un valor
* sin IVA y debe mostrar por consola el precio final con el IVA aplicado.
* 
* Ejemplo de uso:
* 
* calculadora1 = calculadoraIVA(21);
* calculadora2 = calculadoraIVA(10);
* 
**
* calculadora1.calcularIVA(100) => imprime 121
* calculadora2.calcularIVA(100) => imprime 110
* */

const separar=()=>{console.log("\n");};
separar()

function calculadoraiva (){
    let iva=0;

    function agregariva(niva){
        iva = niva/100;
    }
    function aplicariva(precio){
        console.log(`precio sin iva: ${precio}, precio con iva ${precio+=precio*iva}`)
    }
    return{
        agregariva,
        aplicariva
    }
}
const xd= calculadoraiva();
xd.agregariva(21)
xd.aplicariva(100)

xd.agregariva(10)
xd.aplicariva(10)
