/*
*
* EJERCICIOS
*
*/



/*
* 1. Usando un bucle while, recorre números del 1 al 20. Cuenta cuantos números pares hay. Al finalizar el bucle, imprime por pantalla la cantidad total de pares.
* */
console.log("\n")

let numero=0;
while(numero!==20){
    if(numero %2==0){
        console.log(numero+" es par")
    }
    numero++;
}




/*
* 2. Crea una variable llamada color. Con un solo valor o "rojo" o "verde" o "amarillo". Usa switch para mostrar la instrucción correspondiente ("Parado", "Arrancar", "Frenando").
* Prueba que el programa funciona cambiando el valor de la variable color.
* */
console.log("\n")

let color="amarillo";
switch (color){
    case "rojo": 
        console.log("rojo es parado");
        break;
    case "amarillo":
        console.log("amarillo es espere");
        break;
    case "rojo":
        console.log("verde es sigue")
        break;
}



/*
* 3. Define na variable llamada saldo. Como valor inicial pon 1000 (Esto vamos a considerar que es dinero). Usa un bucle (tú decides cuál).
* Simulemos 3 retiros de dinero con cantidades diferentes. En cada vuelta del bucle, si hay saldo suficiente, resta la cantidad al valor del saldo e imprime en pantalla el saldo retirado y el saldo que queda.
* Si no alcanza, imprime "Saldo insuficiente" y detén el programa saliendo del bucle.
* */
console.log("\n")
const saldo =1000;
let intentos =3;
