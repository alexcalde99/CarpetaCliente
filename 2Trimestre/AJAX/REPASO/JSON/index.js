/**
 * Created by ALEX on 12/02/2016.
 */
var peticion_http;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////windows on load//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){

    cargaContenido("../servidor/cargaProvinciasJSON.php","POST",cargarProvincias,null);

    var selectPronvicias = document.getElementById("provincias");
    selectPronvicias.addEventListener("change",cargarMunicipios,false);

}


function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////funciones///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargaContenido(url, metodo, funcion,parametrosEnviar) {
    peticion_http = inicializa_xhr();

    if(peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url, true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send(parametrosEnviar);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////cRGAR PRIVINCIAS//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargarProvincias() {
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {

            //devuelve una cadena de texto
            var respuesta_json = peticion_http.responseText;
            //transformar esa cadena de texto en un objeto JSON.
            var objeto_json = eval("(" + respuesta_json + ")");

            console.log(objeto_json);
            //el objeto json se coje mediante clave/valor

            var cadena="";
            var i =0;
            //key es la clave/indice ..va tener el valor numerico ya que lo asiganos asi,
            // pero podria ser otro apodo(nombre:,apellidos:etcccccc)
            //cada clave tiene un valor...cogemos la clave, la cual va ser el value del option, y su valor
            for(var key in objeto_json) {
                //del objeto_json obtenemos el valor que tiene el key....nos saldra el nombre de la provincia
                cadena += "<option value='" + key + "'>" + objeto_json[key] +"</option>";
                i++;                                      //DEL OBJETO JSON DAME EL VALOR DE KEY
            }

            document.getElementById("provincias").innerHTML = cadena;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////CARGAR MUNICIIPIOS/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
    function cargarMunicipios() {

        var parameter = "provincia=" + encodeURIComponent(this.value);

        cargaContenido("../servidor/cargaMunicipiosJSON.php", "POST", muestraMunicipios, parameter);

    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////mosttar MUNICIIPIOS/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
    function muestraMunicipios() {

        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {

                //devuelve una cadena de texto
                var respuesta_json = peticion_http.responseText;
                //transformar esa cadena de texto en un objeto JSON.
                var objeto_json = eval("(" + respuesta_json + ")");

                console.log(objeto_json);
                //el objeto json se coje mediante clave/valor

                var cadena="";
                var i =0;
                //key es la clave/indice ..va tener el valor numerico ya que lo asiganos asi,
                // pero podria ser otro apodo(nombre:,apellidos:etcccccc)
                //cada clave tiene un valor...cogemos la clave, la cual va ser el value del option, y su valor
                for(var key in objeto_json) {
                    //del objeto_json obtenemos el valor que tiene el key....nos saldra el nombre de la provincia
                    cadena += "<option value='" + key + "'>" + objeto_json[key] +"</option>";
                    i++;
                }


                document.getElementById("municipios").innerHTML = cadena;

            }
        }
    }



