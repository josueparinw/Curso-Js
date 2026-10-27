/*Escribe una función llamada "aplanar" que reciba un array de arrays
de números y retorne un único array con todos los números en orden, sin anidar

Usa reduce() y el operador spread (...)

```
aplanar([ [1, 2], [3, 4], [5] ]) -> [1, 2, 3, 4, 5]
aplanar([ [10], [20, 30], [] ]) -> [10, 20, 30]*/ 



function aplanar(array){
    return array.reduce((acumular,numeros)=>{
        return[...acumular,...numeros];
    },[])
}
console.log(aplanar([ [1, 2], [3, 4], [5] ]));

console.log("\n");
/*Tienes este array de productos:

a) Filtra solo los productos con stock > 0 y retorna un array con sus nombres en mayúsculas
`Resultado esperado: ["Camiseta", "Teclado", "Auriculares"]`

b) Calcula el precio total de todos los productos con stock > 0.

c) Devuelve el producto más caro de toda la lista (con o sin stock).
*/
const productos = [
    {nombre: "Camiseta", precio: 15, categoria: "ropa", stock: 3},
    {nombre: "Pantalón", precio: 40, categoria: "ropa", stock: 0},
    {nombre: "Teclado", precio: 75, categoria: "tecnología", stock: 12},
    {nombre: "Auriculares", precio: 60, categoria: "tecnología", stock: 5},
];

const nombre = productos
.filter(producto=>producto.stock>0)
.map(producto=> producto.nombre.toUpperCase());

console.log(nombre);


/*Crea una clase llamada "CuentaBancaria" con:

- constructor(titular, saldoInicial). Guarda el titular y el saldo. El historial empieza vacío.
- ingresar(cantidad) => Suma la cantidad al saldo y guarda en el historial:
  - "Ingreso: +100 | Saldo: 600"
- retirar(cantidad) => Resta la cantidad al saldo si hay fondos suficientes y guarda en el historial.
  - "Retiro -50 | Saldo: 550"
  - Si no hay fondos, muestra por consola: "Saldo insuficiente" y NO guardes nada en el historial.
- verHistorial() => imprime por consola cada movimiento del historial numerado:
  - "1. Ingreso: +100 | Saldo: 500"
  - "2. Ingreso: +100 | Saldo: 600"
  - "3. Ingreso: +50 | Saldo: 650"
  - "4. Retiro: -250 | Saldo: 400"
- getSaldoActual() => Getter que retorna el saldo actual.

```
Ejemplo:

const cuenta = new CuentaBancaria("Camilo", 500);
cuenta.ingresar(100);
cuenta.retirar(50);
cuenta.retirar(700); // Saldo insuficiente
console.log(cuenta.saldoActual); // 550
cuenta.verHistorial();*/

class CuentaBancaria{
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.saldoInicial= saldoInicial;
        this.historial=[];
    }
    ingresar(cantidad){
        this.saldoInicial = this.saldoInicial + cantidad;

        this.historial.push(
            `Ingreso:+${cantidad}| Saldo:+ ${this.saldoInicial}`
        );
    }

    retirar(cantidad){
        if (cantidad<this.saldoInicial){
            console.log("saldo insuficiente");
        }else{
            this.saldoInicial = this.saldoInicial - cantidad;

            this.historial.push(
               `retiro:+${cantidad}| Saldo:+ ${this.saldoInicial}` 
            );
        }
    }
    
    verhistorial(){
        this.historial.forEach((elementos,index) => {
            console.log(index+1,elementos);
        });
    }

    get saldoActual(){
        return this.saldoInicial;
    }
}

const cuenta = new CuentaBancaria("josue",500);

cuenta.ingresar(100);
cuenta.retirar(50);
cuenta.retirar(700); // Saldo insuficiente
console.log(cuenta.saldoActual); // 550
cuenta.verhistorial();


console.log("\n");


console.log("\n");



console.log("\n");



console.log("\n");