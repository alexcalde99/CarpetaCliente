/**
 * @author ALEX
 */
var frase = prompt("Introduce una frase");
var cadena = new Array();
if (frase.length < 100) {
	alert("No puedes continuar, La frase debe tener mas de 100 Caraceteres");
}else{
	for (var i=0; i < frase.length; i++) {
	  cadena = frase.split("a");
	};
};
	alert(cadena.length-1 + " Letras <a> en el texto");
;