let nUser = prompt("Ingresa un número");
let nPositivo = [1,2,3,4,5,7,8,9,0];

function numeros(){
	for (n in nPositivo) {
		if (nUser == nPositivo[n]) {
			alert("Positivo");
			return;
		}
	}
	alert("Negativo");
}

numeros(nUser);