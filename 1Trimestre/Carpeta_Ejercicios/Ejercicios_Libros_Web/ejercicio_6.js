/**
 * @author ALEX
 */


function letraDNI() {

	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

	var dni = prompt("Introduce numero DNI");
	var letraDNI = prompt("Introduce Letra DNI");
	letraDNI = letraDNI.toUpperCase();
	

	if (dni.length < 8) {
		alert("El numero de dni ha de estar comprendido entre 0 y 99999999");
	} else {
		var resto = dni % 23;
		letraCalculada = letras[resto];

		if (letraDNI == letraCalculada) {
			alert("Letra DNI Correcta");
			alert("DNI: " + dni + letraDNI);
		} else {
			alert("DNI: " + dni + letraCalculada);
		};

	};
};


  
