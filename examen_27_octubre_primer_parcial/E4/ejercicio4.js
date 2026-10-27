// ============================================================
//  EJERCICIO 4 — El Clásico  [2 puntos]
//  Escribe tu solución debajo de cada apartado.
//  Solo se permite usar métodos de array. No uses bucles for/while.
// ============================================================

// FC Barcelona 1-2 Real Madrid
// Doblete de Mbappé (min. 41 y 87). Gol de Raphinha (min. 61, asistencia de Pedri).

const jugadores = [
    {nombre: "Mbappé", equipo: "Real Madrid", titular: true, minutos: 94, goles: 2, asistencias: 0, tarjeta: true},
    {nombre: "Camavinga", equipo: "Real Madrid", titular: false, minutos: 14, goles: 0, asistencias: 1, tarjeta: false},
    {nombre: "Bellingham", equipo: "Real Madrid", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Valverde", equipo: "Real Madrid", titular: true, minutos: 62, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Huijsen", equipo: "Real Madrid", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: true},
    {nombre: "Raphinha", equipo: "Barcelona", titular: true, minutos: 86, goles: 1, asistencias: 0, tarjeta: false},
    {nombre: "Pedri", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 1, tarjeta: false},
    {nombre: "Rodri", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Yamal", equipo: "Barcelona", titular: true, minutos: 90, goles: 0, asistencias: 0, tarjeta: false},
    {nombre: "Gordon", equipo: "Barcelona", titular: true, minutos: 85, goles: 0, asistencias: 0, tarjeta: true},
];


// a) [0,5 puntos] ————————————————————————————————
// Usa reduce() para obtener el marcador final del partido.
// Resultado esperado: { "Real Madrid": 2, "Barcelona": 1 }

const final = jugadores.reduce((acc,elemento)=>{
    return {
        ...acc,[elemento.equipo] : (acc[elemento.equipo]||0)+elemento.goles};
    },{});

console.log(final)
console.log("\n")

// b) [0,5 puntos] ————————————————————————————————
// Devuelve un ranking de participaciones (goles + asistencias)
// ordenado de mayor a menor. Incluye solo jugadores con al menos 1.
// Usa map() y sort().
// Resultado esperado:
// [
//   { nombre: "Mbappé",    participaciones: 2 },
//   { nombre: "Camavinga", participaciones: 1 },
//   { nombre: "Raphinha",  participaciones: 1 },
//   { nombre: "Pedri",     participaciones: 1 },
// ]

const ordenar = jugadores
.filter(elementos=>elementos.goles >0|| elementos.asistencias > 0)
.map(elemento=>{
    let nuevo = {
        nombre:elemento.nombre,
        participaciones:elemento.asistencias + elemento.goles
    };
   return nuevo;
   }
);
ordenar.sort;
console.log(ordenar);
console.log("\n")

// c) [0,5 puntos] ————————————————————————————————
// ¿Todos los titulares del Real Madrid terminaron sin tarjeta amarilla?
// Usa filter() y/o every().
// Resultado esperado: "[boolean] porque [nombreJugador] vio tarjeta"

const verificar = jugadores
.filter(elementos=>elementos.equipo=="Real Madrid" && elementos.titular==true)
.every(elementos=> elementos.tarjeta == false);

const jTrajeta = jugadores
.filter(elementos=>elementos.equipo=="Real Madrid" && elementos.titular==true)
.find( j => j.tarjeta == true);

console.log(verificar +" porque "+ jTrajeta.nombre +" vio tarjeta")



// d) [0,5 puntos] ————————————————————————————————
// Para cada jugador que haya marcado al menos un gol,
// calcula sus "goles por 90 minutos" (redondeado a 2 decimales).
// Fórmula: (goles / minutos) * 90
// Usa filte   r() y/o map().
// Resultado esperado:
// [
//   { nombre: "Mbappé", golesPor90: 1.91 },
//   ...
// ]
const marcado = jugadores
.filter(item=>item.goles>0)          
.map(item=>{
    return nuevo ={
        nombre:item.nombre,
        golesPor90:((item.goles/item.minutos)*90).toFixed(2)
    }
});

console.log(marcado);
