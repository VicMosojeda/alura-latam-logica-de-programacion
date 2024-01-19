alert("¡Bienvenido a nuestro sitio web!");


let name = "luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeError = "Error! Completa todo los campos";

let name1 = prompt("¿Cuál es tu nombre?");
let edad2 = prompt("¿Cuál es tu edad?");

if (edad2 >= 18) {
	alert("¡Puedes obtener tu licencia de conducir!")
} else {
	alert("¡No puedes obtener tu licencia de conducir!")
}