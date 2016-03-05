/**
 * @author ALEX
 */
var frase = prompt("Introduce una frase");
var arrayPalabras = new Array();
arrayPalabras = frase.split(" ");

var x="";

for (var i=0; i < arrayPalabras.length; i++) {
	x +=arrayPalabras[i] + "-->" + arrayPalabras[i].length + " Letras" + "\n";
	//alert(x + " " + x.length + " letras\n");
  
};

alert(x);
