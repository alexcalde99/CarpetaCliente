function ajaxget(pagina) {

    var conexion;
    if (window.XMLHttpRequest) {
        conexion = new XMLHttpRequest();
    }
    else {
        conexion = new ActiveXObject("Microsoft.XMLHTTP");
    }

    function mostrarContenido() {


        conexion.onreadystatechange = function () {
            if (conexion.readyState == 4 && conexion.status == 200) {
                //si too va ok creamos una respuesta texto
                document.getElementById("content").innerHTML = conexion.responseText;
            }
        }


        conexion.open("GET", pagina, true);
        conexion.send();
    }

    mostrarContenido();


}

ajaxget("http://localhost/AJAX/EjercicioGYNTONIC/paginas/inicio.html");

//BOTON INICIO
document.getElementById('inicio').addEventListener("click", ajaxget(
    "http://localhost/AJAX/EjercicioGYNTONIC/paginas/inicio.html"));

//BOTON GIN1
document.getElementById('gin1').addEventListener("click", ajaxget(
    "http://localhost/AJAX/EjercicioGYNTONIC/paginas/gin1.html"));


//BOTON GIN2
document.getElementById('gin2').addEventListener("click", function () {
    peticionAJAX("http://localhost/AJAX/EjercicioGYNTONIC/paginas/gin2.html");
});

//BOTON GIN3
document.getElementById('gin3').addEventListener("click", function () {
    peticionAJAX("http://localhost/AJAX/EjercicioGYNTONIC/paginas/gin3.html");
});
//BOTON GIN4
document.getElementById('gin4').addEventListener("click", function () {
    peticionAJAX("http://localhost/AJAX/EjercicioGYNTONIC/paginas/gin4.html");
});
//BOTON GIN5
document.getElementById('gin5').addEventListener("click", function () {
    peticionAJAX("http://localhost/AJAX/EjercicioGYNTONIC/paginas/gin5.html");
});
