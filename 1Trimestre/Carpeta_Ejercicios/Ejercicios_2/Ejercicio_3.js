/**
 * @author ALEX
 */
function mejorJugador(respuesta) {
  
  var jugador=respuesta.toLowerCase();
  var respCorrecta="Messi";  
  
  
  
  do {
    alert("¿" + jugador + "?" + "NO TIENES NI IDEA DE FUBOL!!!!...");
    var jugador=prompt("¿Cual es el mejor futbolista del mundo?");
    while(jugador !== respCorrecta);
}

return respCorrecta;

}


