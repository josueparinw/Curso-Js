/*
* 1. Crea una función que calcule propina en un restaurante. Debe de recibir el total
* de la cuenta y el porcentaje de propina y debe devolver la cantidad total a pagar.
* Llama la función 3 veces con valores diferentes y muestra cada resultado con 2 decimales.
* */


const calcular = (total,porcentajepropina)=>{
     let propina =total *(porcentajepropina/100);
     let totalcuenta = total + propina;

        return totalcuenta;
     };
     console.log(calcular(100,5))
     console.log(calcular(150,5))
     console.log(calcular(224,5))

     console.log("\n")
/*
* 2. Crea una función llamada saludar que reciba un nombre y una hora (del 0 al 23). Según
* la hora debe devolver "Buenos días [NOMBRE]", "Buenas tardes [NOMBRE]",
* "Buenas noches [NOMBRE]". Hazla con Arrow Functions.
* */

const saludar =(nombre,hora)=>{
        if (hora >=7 && hora<12){
            return "buenos dias " + nombre
        }
        else if (hora >=12 && hora<20){
            return "buenas tardes "+ nombre
        }
        else{
            return "buenas noches " +nombre
        }

    }

console.log(saludar("josue",8));
console.log(saludar("josue",12));
console.log(saludar("josue",21));
console.log("\n")

/* Crea 3 funciones:
*   - aplicarDescuento(precio, porcentaje) que retorne el precio con descuento.
*   - calcularIva(precio) que añada un 21%
*   - resumenCompra(nombre, precio, descuento) sin return que use los dos anteriores
*     y muestre por consola el precio original, el precio con descuento y el precio
*     final con IVA
* */


const aplicarDescuento =(precioOriginal,Porcentajedescuento)=>{
    let descuento=precioOriginal*(Porcentajedescuento/100);
    return precioDescuento = precioOriginal-descuento;
    
};


const calcularIva =(precioOriginal) =>{
    return precioIva=precioOriginal* 1.21;
    
    
};
const resumenCompra =(nombre,precioOriginal,descuento)=>{
    let descuento1=aplicarDescuento(precioOriginal,descuento);
    
    let preciofinal=calcularIva(descuento1);
    console.log(nombre);
    console.log(precioDescuento);
    console.log(preciofinal);
}
resumenCompra("josue",1000,10)





/*

* 4. Crea las notas de un alumno que reciba un nombre como primer parámetro y luego
* cualquier cantidad de notas. Debe calcular el promedio de las notas y mostrar por
* consola ej: "Ana - Promedio: 7.50 - Aprobado". Puede ser Aprobado / Suspenso si el
* promedio es >= 5.
* */

let nombre="josue"
let notas=[5.2,7.5,9];
let longitud=notas.length
const promedio =(notas,nombre){
    let suma =0;

    for (let numero in notas){
        suma+=numero;
    }
    if (promedio/longitud>=5){
        return "aprovado" ,nombre, notas;

    } 
    else{
        return "desaprovado",nombre
    }
}
console.log(notas,nombre)







/*

* 5. Crea una función pedido que reciba el cliente como primer parámetro y luego
* la cantidad de productos (string). La función debe mostrar en consola el nombre
* del cliente, cuantos productos pidió y listar cada uno de ellos.
* Si no pidió nigún producto, mostrar "Sin productos en el pedido".
*
* Ejemplo de salida:
*   Cliente: Marta
*   Total productos: 3
*   1. Café
*   2. Tostada
*   3. Zumo
* */
