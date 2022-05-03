/*
•Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres
*/

let numeroIngresado: number = 0;
let numeroMayor: number = 0;

for (var i = 1; i <= 3; i++) {
  numeroIngresado = Number(prompt("Ingrese un número: "));
  if (numeroIngresado > numeroMayor) {
    numeroMayor = numeroIngresado;
  }
}
console.log("El numero mayor de los tres ingresados es: ", numeroMayor);
