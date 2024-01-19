let name = prompt("¿Cuál es tu nombre?");

function saludar() {
	console.log(`Hola ${name}`);
}
setInterval(alert(`Hola ${name}`), 1000);

saludar();