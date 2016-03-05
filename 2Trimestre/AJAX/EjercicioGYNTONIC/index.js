    var READY_STATE_UNINITIALIZED = 0;
    var READY_STATE_LOADING = 1;
    var READY_STATE_LOADED = 2;
    var READY_STATE_INTERACTIVE = 3;
    var READY_STATE_COMPLETE = 4;

    var peticion_http;

    function cargaContenido(url, metodo, funcion) {
        peticion_http = inicializa_xhr();

        if (peticion_http) {
            peticion_http.onreadystatechange = funcion;
            peticion_http.open(metodo, url, true);
            peticion_http.send(null);
        }
    }

    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }


    function muestraContenidoHTML() {
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                document.getElementById("content").innerHTML = peticion_http.responseText;
            }
        }
    }




   

window.onload = function() {

    cargaContenido("paginas/inicio.html","GET",muestraContenidoHTML);

    document.getElementById("inicio").addEventListener("click",function(){
        cargaContenido("paginas/inicio.html","GET",muestraContenidoHTML);

    });

    document.getElementById("gin1").addEventListener("click",function(){
        cargaContenido("paginas/gin1.html","GET",muestraContenidoHTML);

    });

    document.getElementById("gin2").addEventListener("click",function(){
        cargaContenido("paginas/gin2.html","GET",muestraContenidoHTML);

    });

    document.getElementById("gin3").addEventListener("click",function(){
        cargaContenido("paginas/gin3.html","GET",muestraContenidoHTML);

    });

    document.getElementById("gin4").addEventListener("click",function(){
        cargaContenido("paginas/gin4.html","GET",muestraContenidoHTML);

    });

    document.getElementById("gin5").addEventListener("click",function(){
        cargaContenido("paginas/gin5.html","GET",muestraContenidoHTML);

    });





    /*document.getElementById('gin1').onclick = function () {
        cargaContenido("http://localhost/AJAX/EjercicioGYNTONIC-XML/XML/gintonic1.xml", "GET", muestraContenidoXML);
    }


    document.getElementById('inicio').onclick = function () {
        cargaContenido("http://localhost/AJAX/EjercicioGYNTONIC-XML/paginas/inicio.html", "GET", muestraContenidoHTML);
    }

*/
}







/*
////////////////////////////////////BOTON GIN1///////////////////////////////////////////////////////////
document.getElementById('gin1').addEventListener("click",function(){
    peticioAJAX("http://localhost/AJAX/EjercicioGYNTONIC-XML/XML/gintonic1.xml")
});

////////////////////////////////////BOTON GIN2///////////////////////////////////////////////////////////
document.getElementById('gin2').addEventListener("click",function(){
    peticioAJAX("http://localhost/AJAX/EjercicioGYNTONIC-XML/XML/gintonic2.xml")
});

////////////////////////////////////BOTON GIN1///////////////////////////////////////////////////////////
document.getElementById('gin3').addEventListener("click",function(){
    peticioAJAX("http://localhost/AJAX/EjercicioGYNTONIC-XML/XML/gintonic3.xml")
});*/
