var READY_STATE_UNINITIALIZED=0;
var READY_STATE_LOADING=1;
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3;
var READY_STATE_COMPLETE=4;

var peticion_http;

function cargaContenido(url, metodo, funcion) {
    peticion_http = inicializa_xhr();

    if(peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url  + '?nocache=' + Math.random(), true);
        peticion_http.send(null);
    }
}

function inicializa_xhr() {
    if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function muestraContenidoXML() {
    if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {

            var documentoXml = peticion_http.responseXML;

            //Obtenemos la raíz del documento
            var root = documentoXml.getElementsByTagName("gin-tonic")[0];
            //obtenemos del elemento nombre su primer elemento que es nodoTexto
            var nombre = root.getElementsByTagName("nombre")[0].firstChild.nodeValue;
            document.getElementById("nombre").innerHTML = nombre;

            //obtenemos del elemento descripcion su nodotexto
            var descripcion = root.getElementsByTagName("descripcion")[0].firstChild.nodeValue;
            document.getElementById("descripcion").innerHTML =descripcion;

            document.getElementById("lista").innerHTML = "Lista Ingredientes";

            //cogemos el bloque ingredientes el cual contiene elementos ingrediente , que a su vez
            // tiene elementos hijos texto
            var ingredientes = root.getElementsByTagName("ingredientes")[0];
            //cogemos todos los ingredientes...Tendremos 6 elementos
            var listaIngredientes = ingredientes.getElementsByTagName("ingrediente");

            var txt="";
            for (var i = 0; i < listaIngredientes.length; i++) {
                //del primer elemento ingrediente , cogemos su elemento texto
                txt += "<li>" + listaIngredientes[i].firstChild.nodeValue + "</li>";
            }
            document.getElementById("miLista").innerHTML = txt;

            //cogemos el elemento foto...SU SRC
            var imagen = root.getElementsByTagName("img")[0].firstChild.nodeValue;


            var x = "<img src='" + imagen + "'>";

            document.getElementById("foto").innerHTML = x;


        }
    }
}

function muestraContenidoHTML() {
    if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
            document.getElementById("content").innerHTML = peticion_http.responseText;
        }
    }
}


function limpiar(){
    document.getElementById("content").innerHTML="";
}

function limpiar2(){
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("descripcion").innerHTML = "";
    document.getElementById("lista").innerHTML = "";
    document.getElementById("miLista").innerHTML = "";
    document.getElementById("foto").innerHTML = "";

}


    window.onload = function(){

    cargaContenido("paginas/inicio.html","GET",muestraContenidoHTML);

    ////////////////////////////////////BOTON GIN1///////////////////////////////////////////////////////////
    document.getElementById('inicio').addEventListener("click",function(){
        limpiar2();
        cargaContenido("paginas/inicio.html","GET",muestraContenidoHTML);
    });

    ////////////////////////////////////BOTON GIN1///////////////////////////////////////////////////////////
    document.getElementById('gin1').addEventListener("click",function(){
        limpiar();
        cargaContenido("XML/gintonic1.xml","GET",muestraContenidoXML);
    });

    ////////////////////////////////////BOTON GIN2///////////////////////////////////////////////////////////
    document.getElementById('gin2').addEventListener("click",function(){
        limpiar();
        cargaContenido("XML/gintonic2.xml","GET",muestraContenidoXML);
    });

    ////////////////////////////////////BOTON GIN1///////////////////////////////////////////////////////////
    document.getElementById('gin3').addEventListener("click",function(){
        limpiar();
        cargaContenido("XML/gintonic3.xml","GET",muestraContenidoXML);
    });



};
