/**
 * @author ALEX
 */
var frase = prompt("Introduce una frase");
var posiciones = [1,3,6,9,12,13,15,19,25];
var cadena ="";

for (var i=0; i < posiciones.length; i++){
	cadena += frase.charAt(posiciones[i]);
	
	
	
	
}

alert(cadena.toString());