let dia = prompt("¿Qué día es hoy?");
let dias = ["domingo", "sabado"];

function diaDeLaSemana() {
	for (i in dias) {
		if (dia == dias[i]) {
			alert("¡Buen fin de Semana!");
			return;
		}
	}
	alert("¡Buena Semana!");
}

diaDeLaSemana(dia);