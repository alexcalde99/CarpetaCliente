    $(document).ready(function(){

        //variable donde cargar las peticiones
        $('#contenido');
        var home="principal.html?nocache="+Math.random();
        var platoDia="platodeldia.xml?nocache="+Math.random();
        var carta="carta.html?nocache="+Math.random();




        $('#contenido').load(home);

        $('#home').click(function(){
            $('#contenido').load(home);
        });

        $('#plato').click(function(){
            $('#contenido').html("");//limpiar div
            peticionAJAX("XML",platoDia,null,cargarPlatoDia);
        });

        $('#carta').click(function(){
            $('#contenido').html("");//limpiar div
            $.get(carta, function() {
                $('#contenido').load(carta,function(){
                    peticionAJAX("XML","cargaEspecialidadesXML.php",null,cargaEspecialidades)
                });
            });

        });

        $('#contenido').load(home);


    });



    //*************************************************************************************************
    //********************************************FUNCIONES********************************************
    //*************************************************************************************************



    //************************************FUNCION PLATODIA************************************
    function cargarPlatoDia(datos){
            var txt="";
            var titulo = $(datos).find('titulo').text();
            txt +="<h1>"+titulo+"</h1>";
            var foto=$(datos).find('foto').text();
            txt +="<img src="+foto+">";
            txt +="<h2>Ingredientes:</h2>";
            txt += "<ul>";

            //recogemos todos los ingredientes
            $(datos).find('ingrediente').each(function(){
                txt +="<li>"+$(this).text()+"</li>"
            });
            txt +="</ul><h2>Preparación:</h2><ul>";
            $(datos).find('paso').each(function(){
                txt +="<li>"+$(this).text()+"</li>";
            });
            txt +="</ul>";
            $('#contenido').html(txt);
        }

    //************************************FUNCION CARGARESPECIALIDADES************************************
        function cargaEspecialidades(datos){

                var txt="<option>--Seleccione Opcion--</option>";

                $(datos).find('especialidad').each(function(){
                  var nombre=$(this).find('nombre').text();
                   var codigo=$(this).find('codigo').text();
                    txt+="<option "+"value="+"'"+codigo+"'>"+nombre+"</option>";
                });
            $('#especialidades').html(txt);
            $('#especialidades').change(cargaPlatos);

        }


    //************************************FUNCION cargaPlatos************************************
    function cargaPlatos(){
        var platos="cargaPicos.php?nocache="+Math.random();
        //obtenemos el valor del select
        var especialidad = $('#especialidades').val();
        var parametrosEnviar = {"especialidad" : especialidad};

        peticionAJAX("XML",platos,parametrosEnviar,pintaPlatos)

    }


    //************************************FUNCION pintaPlatos************************************
        function pintaPlatos(datos){
            var platos=$('#platos');
            var txt="<option value=0>--Seleccione Opcion--</option>";
            var listaPlatos ="Tus platos elegidos son:<br>";

            $(datos).find('plato').each(function(){
                var nombre=$(this).find('nombre').text();
                var codigo=$(this).find('codigo').text();
                txt +="<option "+"value="+"'"+nombre+"'>"+nombre+"</option>";
            });

            platos.html(txt);

            $('#platos').change(function(){
                //obtenemos el valor del select platos
                var platoElegido = $('#platos').val();
                //comprobamos q
                if(platoElegido!=0){
                    $('#mensaje').html("El plato "+platoElegido+" ha sido añadido");
                    listaPlatos+=platoElegido+"</br>";
                }
            });

            $('#imprimir').click(function(){
                var nombreEleccion = $('#platos').val();
                //comprobamos que no son numeros
                if(isNaN(nombreEleccion)){
                    var ventana = window.open();
                    ventana.document.write(listaPlatos);
                }
            });
        }



    /*
     *************FUNCION PETICION AJAX *******************************
     /*

     *async : Indica si la comunicación será asincrónica (true) o sincrónica (false)
     *type : Indica el método que se envían los datos (pudiendo ser GET o POST)
     *dataType : Indica el tipo de datos que se va a recuperar (pudiendo ser "html","xml","json","script")
     *contentType : Indicamos como se empaquetan los datos para enviarlos al servidor
     (normalmente "application/x-www-form-urlencoded")
     *url : Indicamos el nombre de la página que procesará la petición de datos.
     *data : Indicamos los datos a enviar al servidor.
     *beforeSend : Indicamos el nombre de la función que se ejecutará previo al envío de datos (en
     nuestro ejemplo mostramos el gif animado que indica que se inició el pedido de datos al servidor)
     *success : Indicamos la función que se ejecuta cuando finalizó el envío de datos del servidor y además
     ocurrió todo en forma correcta (en nuestro ejemplo recuperamos el dato devuelto y lo mostramos en la página)
     *timeout : El tiempo máximo a esperar por la petición de datos.
     *error : El nombre de la función que se ejecuta si los datos no llegan del servidor.
     */
    function peticionAJAX(tipoDocumento,url,datosEnviar,funcionProcesarRespuesta) {

        $.ajax({
            async: true,
            type: "POST",
            dataType: tipoDocumento,
            contentType: "application/x-www-form-urlencoded",
            url: url,
            data: datosEnviar,
            beforeSend: null,
            success: funcionProcesarRespuesta,
            timeout: 4000,
            error: function(){
                alert("error en la peticion")
            }
        });
    }




