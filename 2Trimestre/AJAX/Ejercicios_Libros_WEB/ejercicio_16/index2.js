/**
 * Created by ALEX on 07/02/2016.
 */
var peticion = null;


window.onload = function() {
    peticion = inicializa_xhr();
    if(peticion != null) {
        peticion.onreadystatechange = muestraProvincias;
        peticion.open("POST", "../servidor/cargaProvinciasXML.php?nocache="+Math.random(), true);
        peticion.send(null);
    }


    document.getElementById("provincias").addEventListener("change",cargaMunicipios)
}



///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////INICIALIZA LA PETICION///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////MOSTRAR PROVINCIAS///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function muestraProvincias() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {


            var documentoXml = peticion.responseXML;

            //Obtenemos la raíz del documento
            var root = documentoXml.getElementsByTagName("provincias")[0];

            //lista de toddas las privincias
            var provincias = root.getElementsByTagName("provincia");

            var txt = "";

            txt += "<option value=''>" + "Seleciona Provincia" + "</option>";

            for(var i = 0; i < provincias.length; i++){
                var codigo = provincias[i].getElementsByTagName("codigo")[0].firstChild.textContent;
                var nombreProvincia = provincias[i].getElementsByTagName("nombre")[0].firstChild.textContent;

                txt += "<option value='"+codigo+"'>" + nombreProvincia + "</option>";

            }

            document.getElementById("provincias").innerHTML = txt;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////CARGAR MUNICIPIOS/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function cargaMunicipios() {
    //selecionamos la lista de provicnias
    var lista = document.getElementById("provincias");
    //cogemos el codigo de la provincia selecionada
    var provinciaCodigo = lista.options[lista.selectedIndex].value;
    //comprobamos que la privicnia es un numero
    if(isNaN(provinciaCodigo)==false) {
        peticion = inicializa_xhr();
        if (peticion) {
            //llamamos a la funcion muestramunicipios que cargara los resultados en el selct
            peticion.onreadystatechange = muestraMunicipios;
            peticion.open("POST", "../servidor/cargaMunicipiosXML.php?nocache=" + Math.random(), true);
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //le enviamos la variable provincia
            peticion.send("provincia=" + provinciaCodigo);
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////MUESTRA MUNICIPIOS/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function muestraMunicipios() {
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {

            var documento_xml = peticion.responseXML;

            //Obtenemos la raíz del documento
            var root = documento_xml.getElementsByTagName("municipios")[0];
            //lista de todos los municipios
            var listaMunicipios = root.getElementsByTagName("municipio");

            var txt = "";

            txt += "<option value=''>" + "Seleciona Municipio" + "</option>";

            for(var i = 0; i < listaMunicipios.length; i++){
                var codigo = listaMunicipios[i].getElementsByTagName("codigo")[0].firstChild.textContent;
                var nombreMunicipio = listaMunicipios[i].getElementsByTagName("nombre")[0].firstChild.textContent;

                txt += "<option value='"+codigo+"'>" + nombreMunicipio + "</option>";

            }

            document.getElementById("municipios").innerHTML = txt;


        }
    }
}
