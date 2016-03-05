/**
 * Created by ALEX on 12/02/2016.
 */


var peticion_http;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////windows on load//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){

        cargaContenido("../servidor/cargaProvinciasXML.php","POST",cargarProvincias);

        var selectPronvicias = document.getElementById("provincias");
        selectPronvicias.addEventListener("change",cargarMunicipios,false);

}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////funciones///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargaContenido(url, metodo, funcion,parametrosEnviar) {
    peticion_http = inicializa_xhr();

    if(peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url  + '?nocache=' + Math.random(), true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send(parametrosEnviar);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////cRGAR PRIVINCIAS//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargarProvincias(){
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {

            //la respuesta es en formato XML
            var documentoXML = peticion_http.responseXML;
            //el elemento entero de XML
            var root = documentoXML.getElementsByTagName("provincias")[0];

            //lista de todas las privincias
            var provincias = root.getElementsByTagName("provincia");

            var cadena = "";

            var divProvincias = document.getElementById("provincias");

            for(var i =0;i < provincias.length;i++){
                var codigoProvincia = provincias[i].getElementsByTagName("codigo")[0].firstChild.textContent;
                var nombreProvincia = provincias[i].getElementsByTagName("nombre")[0].firstChild.textContent;


                cadena += "<option value='"+ codigoProvincia +"'>" +nombreProvincia + "</option>"
            }

            divProvincias.innerHTML = cadena;

            }
        }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////CARGAR MUNICIIPIOS/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargarMunicipios(){

            var parameter = "provincia=" + encodeURIComponent(this.value);

                cargaContenido("../servidor/cargaMunicipiosXML.php","POST",muestraMunicipios,parameter);



}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////mosttar MUNICIIPIOS/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function muestraMunicipios(){

    if(peticion_http.readyState == 4) {
        if(peticion_http.status == 200) {

            //Creamos el objeto de tipo documento XML
            var documentoXml = peticion_http.responseXML;

            var cadena ="";

            if(documentoXml == null){

                cadena = "<option>- Selecciona Provincia -</option>";

            } else {
                //Obtenemos la raíz del documento
                var root = documentoXml.getElementsByTagName("municipios")[0];



                var municipio = root.getElementsByTagName("municipio");

                for(var i = 0; i < municipio.length; i++){

                    var codigo = municipio[i].getElementsByTagName("codigo")[0].firstChild.textContent;
                    var nombre = municipio[i].getElementsByTagName("nombre")[0].firstChild.textContent;
                    cadena += "<option value='"+ codigo +"'>"+ nombre +"</option>";
                }
            }


            document.getElementById("municipios").innerHTML = cadena;

        }
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


