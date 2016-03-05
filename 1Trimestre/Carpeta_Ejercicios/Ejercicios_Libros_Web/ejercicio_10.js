/**
 * @author ALEX
 */

function palindromo(cadena) {

    // Pasamos a minusculas la cadena
    var cadenaOriginal = cadena.replace(/\s/g, "").toLowerCase();
    
    var cadenaInvertida = "";

    x = cadenaOriginal.length;
    while (x >= 0) {  //vamos guardando en cadenaInvertida la cadena de atras adelante 
        var cadenaInvertida = cadenaInvertida + cadenaOriginal.charAt(x);
        x--; 

    }
    
    //se guardara la cadena original en un araray
    var arrayLetrasNormal = cadenaOriginal.split("");
    
    //se guardara la cadena invertida en un araray
    var arrayLetrasInvertidas = cadenaInvertida.split("");
 
    
	var esPalindromo = true;
    //SE COMPRUEBA SI CADA POSICION DE CADA ARRAY ES IGUAL A LA OTRA, SI LO ES AUMENTA EL CONTADOR;
    for (var i = 0; i < arrayLetrasNormal.length && esPalindromo; i++) {
        if (arrayLetrasNormal[i] !== arrayLetrasInvertidas[i]){
            esPalindromo = false;
        }
        
    }
    
    //SI ES TRUE, SIGNIFICA Q SON IGUALES;
    if (esPalindromo===true){
            alert("La cadena: '" + cadenaOriginal + "' \nES UN PALINDROMO");
        }else{
            alert("La cadena:" + cadenaOriginal + "\nNO ES UN PALINDROMO");
        };



 
}