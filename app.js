let nUser = 0;
let nSecret = Math.floor(Math.random() * 10) + 1;
let intentos = 1;
let veces = "vez";
let maxIntentos = 3;

while (nUser != nSecret) {
	nUser = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

	console.log(nUser);

	if (nUser == nSecret ) {
		alert(`Acertaste, el número es: ${nUser}. Lo hiciste en ${i} ${intentos == 1 ? 'vez' : 'veces'}`);
	} else {
		if (nUser > nSecret) {
			alert("El número secreto es menor");
		} else {
			alert("El número secreto es mayor");
		}

		intentos++;
		// veces = "veces";
		if (intentos > 3) {
			alert(`Llegaste al maximo de ${maxIntentos} intentos`);
			break;
		}
	}

}