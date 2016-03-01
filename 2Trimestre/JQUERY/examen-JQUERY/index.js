    $(document).ready(function(){

        //variable donde cargar las peticiones
        var contenido=$('#contenido');
        var url_principal="principal.html?nocache="+Math.random();
        var url_plato="platodeldia.xml?nocache="+Math.random();
        var url_carta="carta.html?nocache="+Math.random();



        contenido.load(url_principal);

        $('#home').click(function(){
            contenido.load(url_principal);
        });

        $('#plato').click(function(){
            contenido.html("");
            $.get(url_plato, platoDelDia, "xml");
        });

        $('#carta').click(function(){
            contenido.html("");
            contenido.load(url_carta, cargaEspecialidades);
        });

        contenido.load(url_principal);


    });



    //*************************************************************************************************
    //********************************************FUNCIONES********************************************
    //*************************************************************************************************



    //************************************FUNCION PLATODIA************************************
    function platoDelDia(docXML){
            var txt="";
            var titulo = $(docXML).find('titulo').text();
            txt +="<h1>"+titulo+"</h1>";
            var foto=$(docXML).find('foto').text();
            txt +="<img src="+foto+">";
            txt +="<h2>Ingredientes:</h2>";
            txt += "<ul>";

            //recogemos todos los ingredientes
            $(docXML).find('ingrediente').each(function(){
                txt +="<li>"+$(this).text()+"</li>"
            });
            txt +="</ul><h2>Preparación:</h2><ul>";
            $(docXML).find('paso').each(function(){
                txt +="<li>"+$(this).text()+"</li>";
            });
            txt +="</ul>";
            $('#contenido').html(txt);
        }

    //************************************FUNCION CARGARESPECIALIDADES************************************
        function cargaEspecialidades(){
            var url_especialidades="cargaEspecialidadesXML.php?nocache="+Math.random();

            $.get(url_especialidades, function(docXML){
                var especialidades=$('#especialidades');
                var cadena_html="<option>- Selecciona -</option>";
                var nombre="";
                var codigo="";
                $(docXML).find('especialidad').each(function(){
                    nombre=$(this).find('nombre').text();
                    codigo=$(this).find('codigo').text();
                    cadena_html+="<option "+"value="+"'"+codigo+"'>"+nombre+"</option>";
                });
                especialidades.html(cadena_html);
                especialidades.change(cargaPlatos);
            }, "xml");
        }


    //************************************FUNCION cargaPlatos************************************
    function cargaPlatos(){
        var url_platos="cargaplatosXML.php?nocache="+Math.random();


        var especialidad = $('#especialidades').val();


        if(!isNaN(especialidad)){

            var parametros = {"especialidad" : especialidad};

            $.ajax({
                data:  parametros,
                dataType:  "xml",
                url:   url_platos,
                type:  'post',
                success:  pintaPlatos,
                error:  function (){
                    alert("error obtenint el recurs"+url_platos);
                }
            });
        }
    }


    //************************************FUNCION pintaPlatos************************************
        function pintaPlatos(docXML){
            var platos=$('#platos');
            var cadena="<option value=0>- Selecciona -</option>";
            var cena ="";

            $(docXML).find('plato').each(function(){
                var nombre=$(this).find('nombre').text();
                var codigo=$(this).find('codigo').text();
                cadena +="<option "+"value="+"'"+nombre+"'>"+nombre+"</option>";
            });
            platos.html(cadena);

            $('#platos').change(function(){
                var eleccion = $('#platos').val();
                if(eleccion!=0){
                    $('#mensaje').html("El plato "+eleccion+" ha sido añadido a su cena");
                    cena+=eleccion+"</br>";
                }
            });

            $('#imprimir').click(function(){
                var eleccion = $('#platos').val();
                if(eleccion!=0){
                    var ventana = window.open();
                    ventana.document.write(cena);
                }
            });
        }








