
var pos = [1,3,6,9,12,13,15,19,25];

var frase = prompt("Escriu una frase:");

var message = '';

for(var i = 0; i < pos.length ;i++ ){
	
	message += "posicio " + pos[i] + " -> " + frase.charAt(pos[i]-1) + "\n";
	
}

alert(message);
