/**
 * Created by ALEX on 29/10/2015.
 */


/*
 ****************************funciones*************************************+
 */

function mostrarTexto1() {

    alert('COCHES DEPORTIVOS: \n Los coches deportivos tienen un alto consumo de combustible');
}

function mostrarTexto2() {

    alert("COCHES TUNING: \n Los coches deben ser tratados con sumo cuidado");
}
function mostrarTexto3() {

    alert("COCHES ANTIGUOS:\n Los coches antiguos son dificiles de reparar debido a la antiguedad de sus piezas");
}


//cambia laos elementos h4 a color verde cuando onmousever
function cambiarAVerde(elemento) {
    //alert("a");
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

function cambiarImagenes(id) {

    //var misImagenes = {
    //
    //    'deportivo': "imagenes/deportivo.jpg",
    //    'tuning': "imagenes/tuning.jpg",
    //    'clasico': "imagenes/antiguo.jpg"
    //}
    //document.getElementById("imagenPoner").src = misImagenes[id];


    var misImagenes = new Array(3);
    misImagenes[0] = "imagenes/deportivo.jpg";
    misImagenes[1] = "imagenes/tuning.jpg";
    misImagenes[2] = "imagenes/antiguo.jpg";

    document.getElementById("imagenPoner").src = misImagenes[id];


}

//*******************************************************************************************************************
//*******************************************************************************************************************
//*******************************************************************************************************************


/*
 ****************************ASIGNACIONES*************************************+
 */

window.onload = function () {


//primer avsio del primero parrafo
    document.getElementById('aviso_1').onmouseover = mostrarTexto1;


    //segundo aviso del segundo parrafo
    document.getElementById('aviso_2').onmouseover = mostrarTexto2;

//tercer aviso tecer parrafo
    document.getElementById('aviso_3').onmouseover = mostrarTexto3;


    //cambiar texto NIVEL MEDIO a color VERDE
    var elementosH4 = document.getElementsByTagName("h4");
    for (var i = 0; i < elementosH4.length; i++) {
        elementosH4[i] = cambiarAVerde(elementosH4[i]);
    }


    //cambiar texto nivel alto a color rojo
    var nivelAlto = document.getElementById("tercerAlerta");
    cambiarARojo(nivelAlto);


    //cambiar imagen de abajo
    document.getElementById("deportivo").onmouseover = cambiarImagenes(0);
    document.getElementById("tuning").onmouseover = cambiarImagenes(1);
    document.getElementById("clasico").onmouseover = cambiarImagenes(2);


}