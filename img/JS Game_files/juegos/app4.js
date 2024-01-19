alert(`Bienvenido a JS Game,tendrás que dar me 3 números. Si tu puntuación es 100, ganas.`);

let n1 = parseInt(prompt("Ingresa un el primer número"));

let n2 = parseInt(prompt("Ingresa un el segundo número"));

let n3 = parseInt(prompt("Ingresa un el tercer número"));

function sumar(n1,n2,n3){
	let res = n1 + n2 + n3;
	if(res == 100){
		alert(`¡Felicidades, has ganado!`);
	} else {
		alert(`Intenta nuevamente para ganar.`);	
	}
	return res;
}

let resultado = sumar(n1,n2,n3);
