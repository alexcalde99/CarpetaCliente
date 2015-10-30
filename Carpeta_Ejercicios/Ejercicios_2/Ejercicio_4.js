/**
 * @author ALEX
 */
function imprimirEstrofa(respuesta){
	
	var numero=respuesta;
	var estrofa1="Este adiós, no maquilla un hasta luego,este nunca, no esconde" 
	+ "un ojalá, estas cenizas, no juegan con fuego,este ciego, no mira para atrás";
	
	var estrofa2="Este notario firma lo que escribo esta letra no la protestaré,\
ahórrate el acuse de recibo estas vísperas, son las de después.";

var estrofa3="A este ruido, tan huérfano de padre no voy a permitirle que taladre\
un corazón, podrido de latir";

var estrofa4="este pez ya no muere por tu boca este loco se va con otra loca"
+ "estos ojos no lloran más por ti.";
	
	
		
		switch(numero){ 
   	case 1: 
      	alert(estrofa1); 
      	break;
   	case 2: 
      	alert(estrofa2); 
      	break;
   	case 3: 
      	alert(estrofa3);
      	break;
   	case 4: 
       alert(estrofa4);
      	break;
      	case 5: 
       alert(estrofa1 + "\n" + estrofa2 + "\n" + estrofa3 + "\n" + estrofa4);
      	break;
      	case 6: 
       
      	break;
  	default: 
      	alert("Numero incorrecto, introduce un numero entre 1 y 6"); 
    }
		
		
		
	
        
}
    

