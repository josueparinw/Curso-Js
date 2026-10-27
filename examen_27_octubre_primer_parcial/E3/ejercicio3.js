// ============================================================
//  EJERCICIO 3 - Closure: cronómetro [1,5 puntos]
//  Escribe tu solución debajo del enunciado.
// ============================================================

// Crea una función "crearCronometro" usando un closure.
// No recibe parámetros y devuelve un objeto con estos métodos:
//
//   · iniciar()    → arranca el cronómetro desde donde estaba.
//                    Si ya está en marcha: muestra "El cronómetro ya está en marcha."
//
//   · pausar()     → pausa el cronómetro.
//                    Si ya está pausado: muestra "El cronómetro ya está pausado."
//
//   · sumar(seg)   → añade segundos al tiempo acumulado.
//                    Solo funciona si está pausado (si está en marcha, no hace nada).
//
//   · reiniciar()  → pone el tiempo a 0 y lo pausa.
//
//   · get tiempo() → devuelve el tiempo acumulado en segundos.
//
// El tiempo NO debe ser accesible ni modificable desde fuera
// salvo a través de los métodos anteriores.
//
// Verificación (estos console.log deben dar los resultados indicados):
//   const crono = crearCronometro();
//   crono.iniciar();
//   crono.iniciar();           // "El cronómetro ya está en marcha."
//   crono.sumar(30);           // no hace nada (está en marcha)
//   crono.pausar();
//   crono.sumar(30);           // suma 30 segundos
//   console.log(crono.tiempo); // 30
//   crono.reiniciar();
//   console.log(crono.tiempo); // 0

function crearCronometro(){

let contador = 0;
let pausa =false;
    return{
        iniciar:function(){
            if(contador===0){
                contador+=1;
                return console.log("inicio");
            }else{
                return console.log("El cronómetro ya está en marcha.");
            }
        },
        pausar:function(){
            if(contador>0 && pausa!=true){
                pausa=true;
                return console.log("pausa")
            }else{
                return console.log("El cronómetro ya está pausado.");
            }
        },
        sumar:function(valor){
            if (contador>=0 && pausa!=false){
               contador += valor;
                return console.log("se sumo 30 segundos")
            }else{
                return console.log("no hace nada, esta en marcha")
            }

        },
        reiniciar:function(){
            contador=0;
            pausa=true;
        },

        tiempo:function(){
        return console.log(contador)
    }
        
    }
    

}
const crono = crearCronometro();                                
crono.iniciar();                                                
crono.iniciar();           // "El cronómetro ya está en marcha."
crono.sumar(30);           // no hace nada (está en marcha)     
crono.pausar();                                                 
crono.sumar(30);           // suma 30 segundos                  
crono.tiempo() // 30                                
crono.reiniciar();                                              
crono.tiempo()                               