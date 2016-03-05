/**
 * Created by ALEX on 29/10/2015.
 */


/**************************************************************************
 ****************************funciones*************************************+
 **************************************************************************/

//*******************************************************************************************************************
//****************************************FUNCION MOSTRAR TEXTO******************************************************
//*******************************************************************************************************************
function mostrarTexto(texto){
    var texto = texto;

    return function() {
        alert(texto);
    }
}



function mostrarTextoOculto(){
    var textoOculto = document.getElementById("sacarOculto");
    textoOculto.className = "visible";
}
function ocultarTexto(){
    var textoOculto = document.getElementById("sacarOculto");
    textoOculto.className = "oculto";
}


//*******************************************************************************************************************
//****************************************FUNCION CAMBIAR A verde******************************************************
//*******************************************************************************************************************
//cambia laos elementos h4 a color verde cuando onmousever
function cambiarAVerde(elemento) {

    var i = elemento;
    i.onmouseover = function () {
        this.style.color = "green";
        this.style.fontSize = "22px";
    }
    i.onmouseout = function () {
        this.style.color = "black";
        this.style.fontSize = "10px";
    }
}

//*******************************************************************************************************************
//****************************************FUNCION CAMBIAR A ROJO******************************************************
//*******************************************************************************************************************

function cambiarARojo(elemento) {
    var x = elemento;
    x.onmouseover = function () {
        this.style.color = "red";
        this.style.fontSize = "33px";
        var textoOculto = document.getElementById("textoAlertaOculto");
        textoOculto.className = "visible";
        textoOculto.style.color = "red";
        textoOculto.style.fontSize = "33px";
    }
    x.onmouseout = function () {
        this.style.color = "black";
        this.style.fontSize = "10px";
        var textoOculto = document.getElementById("textoAlertaOculto");
        textoOculto.className = "oculto";
    }
}
//*******************************************************************************************************************
//*******************************************************************************************************************
//*******************************************************************************************************************


//*******************************************************************************************************************
//*****************************************FUNCION CAMBIAR IMAGENES**************************************************
//*******************************************************************************************************************

function cambiarImagenes1() {

    var elemento = document.getElementById("imagenPoner");
    elemento.src = "imagenes/deportivo.jpg";
}
function cambiarImagenes2() {

    var elemento = document.getElementById("imagenPoner");
    elemento.src = "imagenes/tuning.jpg";

}
function cambiarImagenes3() {

    var elemento = document.getElementById("imagenPoner");
    elemento.src = "imagenes/antiguo.jpg";
}

function ponerImagenFija(){
    var elemento = document.getElementById("imagenPoner");
    elemento.src = "imagenes/deportivo.jpg";
}
//*******************************************************************************************************************
//*******************************************************************************************************************
//*******************************************************************************************************************










/*******************************************************************************
 ****************************ASIGNACIONES*************************************+
 ********************************************************************************/

window.onload = function () {


//primer avsio del primero parrafo
    document.getElementById('aviso_1').onmouseover = mostrarTexto('COCHES DEPORTIVOS: \n Los coches deportivos tienen un alto consumo de combustible');


    //segundo aviso del segundo parrafo
    document.getElementById('aviso_2').onmouseover = mostrarTexto("COCHES TUNING: \n Los coches deben ser tratados con sumo cuidado");

//tercer aviso tecer parrafo
    document.getElementById('aviso_3').onmouseover = mostrarTexto("COCHES ANTIGUOS:\n Los coches antiguos son dificiles de reparar debido a la antiguedad de sus piezas");


    //cambiar texto NIVEL MEDIO a color VERDE
    var elementosH4 = document.getElementsByTagName("h4");
    for (var i = 0; i < elementosH4.length; i++) {
        elementosH4[i] = cambiarAVerde(elementosH4[i]);
    }


    //cambiar texto nivel alto a color rojo
    var nivelAlto = document.getElementById("tercerAlerta");
    cambiarARojo(nivelAlto);

/*
 //cambiar imagen de abajo
 */

    var deportivo=document.getElementById("deportivo");
    deportivo.onmouseover = cambiarImagenes1;
    deportivo.onmouseover = mostrarTextoOculto;
    deportivo.onmouseout = ponerImagenFija;
    deportivo.onmouseout = ocultarTexto;
    var tuning=document.getElementById("tuning");
    tuning.onmouseover = cambiarImagenes2;
    tuning.onmouseout = ponerImagenFija;
    var antiguo=document.getElementById("antiguo");
    antiguo.onmouseover = cambiarImagenes3;
    antiguo.onmouseout = ponerImagenFija;




}