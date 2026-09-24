/*
* 
* 4. Tenéis dos valores guardados como strings ("42" y "8"). Si los sumas directamente,
* debería de aparecer en consola "428". Usa el métdo correspondiente para efectuar 
* una suma de valores numéricos reales e imprime el resultado por consola.
* 
* */
let a="43", b="8";
let suma= parseInt(a)+parseInt(b)
console.log(suma)
console.log("\n")

/*
* 
* 5. Crea un objeto llamado alumno, con las claves nombre, edad y nota. Luego, Añade 
* una clave llamada "aprobado" con el valor true o false si la nota es mayor o igual a 6.
* Muestra el objeto final en consola.
* 
* */

let alumno={
    "nombre":"josue",
    "edad":23,
    "nota":6,
}
//if (alumno.nota >= 6){
//    alumno["aprobado"]= true;
//}
//else
//    alumno["aprobado"]= false;
//    
//


alumno["aprobado"]= alumno.nota >= 6;
//alumno["aprobado"]=   alumno.nota >= 6 ? true:false;

console.log(alumno);

/*
/*
*
* 6. Crea un objeto llamado producto, con las claves nombre y precio. Luego, haciendo uso de prompt()
* Añade la cantidad de articulos que tiene ese producto. Imprime el objeto final.
*
* */
console.log("\n")

let cantidad = prompt("Introduce la cantidad")
let producto={
    nombre:"producto",
    precio5
    :10.4,
}
producto.cantidad=cantidad;
console.log(producto);

