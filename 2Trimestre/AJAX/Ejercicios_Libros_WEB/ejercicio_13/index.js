/**
 * Created by ALEX on 02/02/2016.
 */
var READY_STATE_COMPLETE=4;
var peticion_http = null;

function inicializa_xhr() {
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function valida() {
    var login = document.getElementById("login").value;
    peticion_http = inicializa_xhr();
    if(peticion_http) {

        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "../servidor/compruebaDisponibilidad.php", true);

        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //var query_string = crea_query_string();
        peticion_http.send(login);
    }
}

function procesaRespuesta() {
    if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
            if (peticion_http.responseText == "si"){
                var x = document.getElementById("login");
                x.style.borderColor="green";
            }else{
                var x = document.getElementById("login");
                x.style.borderColor="red";
            }

            document.getElementById("disponibilidad").innerHTML = peticion_http.responseText;

        }
    }
}

window.onload = function (){

    document.getElementById("comprobar").addEventListener("click",valida,true);

}