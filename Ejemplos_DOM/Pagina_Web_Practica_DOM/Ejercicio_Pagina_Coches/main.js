/**
 * Created by ALEX on 28/10/2015.
 */
function advertencia1() {
    alert("COCHES DEPORTIVOS: \n Los coches deportivos tienen un alto consumo de combustible");
}
function advertencia2() {
    alert("COCHES TUNING: \n Los coches deben ser tratados con sumo cuidado");
}
function advertencia3() {
    alert("COCHES ANTIGUOS:\n Los coches antiguos son dificiles de reparar debido a la antiguedad de sus piezas");
}


function mostrarTexto() {
    var mostrar = document.getElementById("sacar");
    mostrar.className = "visible";
}
function ocultarTexto() {
    var ocultar = document.getElementById("sacar");
    ocultar.className = "oculto";
}

function cambiarImagen(id){
    var misImagenes = {

        'deportivo': "imagenes/deportivo.jpg",
        'tuning': "imagenes/tuning.jpg",
        'clasico': "imagenes/antiguo.jpg"
    }
    document.getElementById("imagenPoner").src = misImagenes[id];
}

function cambiarAVerde(texto) {

   var i=document.getElementById(texto);
    i.style.color="green";
    i.style.fontSize="22px";
}


function cambiarANegro(texto) {

    var i=document.getElementById(texto);
    i.style.color="black";
    i.style.fontSize="12px";
}


function cambiarARojo(texto) {

    var i=document.getElementById(texto);
    i.style.color="red";
    i.style.fontSize="32px";
}

function mostrarAlerta(texto){

//// Crear nodo de tipo Element
//    var parrafo = document.createElement("p");
//
//// Crear nodo de tipo Text
//    var contenido = document.createTextNode("Las reparaciones son muy caras");
//parrafo.appendChild(contenido);
//
//    var div=document.getElementById('ultimo');
//    var h3=document.getElementById('tercero')
//    div.insertBefore(parrafo,h3);




}

function visible(id){
    document.getElementById(id).className = 'visibleRojo';
}

function oculto(id){
    document.getElementById(id).className = 'oculto';
}

