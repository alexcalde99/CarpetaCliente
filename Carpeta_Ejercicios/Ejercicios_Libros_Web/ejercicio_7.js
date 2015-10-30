/**
 * @author ALEX
 */

function factorial(){

var numero=prompt("Introduce un numero y sabras su factorial");
var resultado=1;

for (var i=1; i <=numero; i++) {
	resultado = resultado * i;
  
};
document.write("El factorial de " + numero + " es: " + resultado);
};