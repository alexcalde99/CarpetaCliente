/**
 * Created by ALEX on 19/02/2016.
 */

$(document).ready(function(){

    var elementoSelecionado;
    var colorSelecionado;

    //obtenemos el valor del radio
   var x = $('#formulario input').change(function() {
        elementoSelecionado = $('input[name=elemento]:checked', '#formulario').val();
    });


    //obtenemos el valor del select , lo cogemos por ID y cuando cambie asignamos el valor a la variable
        $("#color").change(function(){
            colorSelecionado = $("#color").val();
        });


    //al pulsar el boton añadireremos la clase selecionada al elemento selecionado
    $('#boton').click( function() {

        $(elementoSelecionado).addClass(colorSelecionado);
    });

    //elimino todas las clases que sehan añadido
    $('#boton1').click( function() {

        $("*").removeClass("rojo").removeClass("azul").removeClass("verde").removeClass("amarillo");


    });




});


