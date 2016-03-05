/**
 * Created by ALEX on 05/11/2015.
 */



/******************************************************************************************
********************FUNCION VALIDAR NOMBRE*************************************************
 *****************************************************************************************/
function validarNombre(){

    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpNombre = /^([a-z ραινσϊ]{2,60})$/i;

    var nombre = document.getElementById('element_1_1');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_Nom");
        elemento.innerHTML = "Introduce nombre valido";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Nom");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR APELLIDO*************************************************
 *****************************************************************************************/

function validarApellido(){

   // var regexpNombre = /^[A-Za-zαινσϊρ]{2,}([\s][A-Za-zαινσϊρ]{2,})+$/i;
    var regexpNombre = /^([a-z ραινσϊ]{2,60})$/i;

    var nombre = document.getElementById('element_1_2');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_Ape");
        elemento.innerHTML = "Introduce Apellido valido";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Ape");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";
    }

}




/******************************************************************************************
 ********************FUNCION VALIDAR DIRECCION*********************************************
 *****************************************************************************************/
function validarDireccion(){

    var regexpNombre =/^([a-zA-Z\d\s\-\,\#\.\+])+/;
    var nombre = document.getElementById('element_2_1');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_Dir");
        elemento.innerHTML = "Introduce Direccion valido";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Dir");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";
    }
}



/******************************************************************************************
 ********************FUNCION VALIDAR CIUDAD*************************************************
 *****************************************************************************************/
function validarCiudad(){

    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpNombre = /^([a-z ραινσϊ]{2,60})$/i;

    var nombre = document.getElementById('element_2_3');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_Ciu");
        elemento.innerHTML = "Introduce Ciudad valida";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Dir");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";

    }

}

/******************************************************************************************
 ********************FUNCION VALIDAR PROVINCIA*********************************************
 *****************************************************************************************/
function validarProvincia(){
    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpNombre = /^([a-z ραινσϊ]{2,60})$/i;

    var nombre = document.getElementById('element_2_4');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_Prov");
        elemento.innerHTML = "Introduce Provincia valida";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Prov");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR CODIGO POSTAL*****************************************
 *****************************************************************************************/
function validarCP(){
    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpNombre = /^\d{5}(?:[-\s]\d{4})?$/;

    var nombre = document.getElementById('element_2_5');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_CP");
        elemento.innerHTML = "Introduce CP valido";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_CP");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR WEB*************************************************
 *****************************************************************************************/
function validarWEB(){
    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpNombre = /^https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}/;

    var nombre = document.getElementById('element_6');
    if (!regexpNombre.test(nombre.value)){
        nombre.focus();
        nombre.style.borderColor="red";
        var elemento= document.getElementById("label_WEB");
        elemento.innerHTML = "Introduce WEB valida";
        elemento.style.color="red";

    }else{
        var elemento1= document.getElementById("label_WEB");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        nombre.style.borderColor="grey";

    }

}



/******************************************************************************************
 ********************FUNCION VALIDAR FECHA*************************************************
 *****************************************************************************************/
function validaFechaDDMMAAAA(){
    var nombre = document.getElementById('element_2_8');
        var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if ((!RegExPattern.test(nombre.value)) && (nombre!='')) {
            nombre.focus();
            nombre.style.borderColor="red";
            var elemento= document.getElementById("label_Fecha");
            elemento.innerHTML = "Introduce Fecha valida(dd/mm/aaaa)";
            elemento.style.color="red";
            return true;
        } else {
            var elemento1= document.getElementById("label_Fecha");
            elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
            nombre.style.borderColor="grey";
            return false;
        }

}


/******************************************************************************************
 ********************FUNCION VALIDAR TELEFONO**********************************************
 *****************************************************************************************/
function validarTelefono(){

    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpTelefono = /(?:[+]?(?:[0-9]{1,5}|\\x28[0-9]{1,5}\\x29)[ ]?)?[0-9]{2}(?:[0-9][ ]?){6}[0-9]/;

    var elemento = document.getElementById('element_4');
    if (!regexpTelefono.test(elemento.value)){
        elemento.focus();
        elemento.style.borderColor="red";
        var elemento1= document.getElementById("label_Tel");
        elemento1.innerHTML = "Introduce un Telefono valido (123456789)";
        elemento1.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Tel");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        elemento.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR EMAIL*************************************************
 *****************************************************************************************/
function validarEmail(){
    //var regexpNombre=/^[a-zA-Z ]+$/;
    var regexpEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    var elemento = document.getElementById('element_5');
    if (!regexpEmail.test(elemento.value)){
        elemento.focus();
        elemento.style.borderColor="red";
        var elemento1= document.getElementById("label_Email");
        elemento1.innerHTML = "Introduce un email valido ejemplo@ejemplo.com";
        elemento1.style.color="red";

    }else{
        var elemento1= document.getElementById("label_Email");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        elemento.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR SITUACION LABORAL*************************************
 *****************************************************************************************/
function validarSituacionLaboral(){

var valor1 = document.getElementsByName("trabajo");
    for(var i = 0;i < valor1.length;i++){
        if(valor1[i].value == null || valor.length == 0){
            var valor = document.getElementById('li_8_1');
        }
    }


    var valor = document.getElementById('li_8_1');
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)){
        elemento.focus();
        elemento.style.borderColor="red";
        var elemento1= document.getElementById("situacion");
        elemento1.innerHTML = "Selecciona una de las opciones";
        elemento1.style.color="red";

    }else{
        var elemento1= document.getElementById("situacion");
        elemento1.innerHTML ='<img src="boton_OK.png" id = "galeria1" />';
        elemento.style.borderColor="grey";

    }

}


/******************************************************************************************
 ********************FUNCION VALIDAR SITUACION LABORAL*************************************
 *****************************************************************************************/
function enviarForm(){
    alert("formulario enviado con exito");
    var form=document.getElementById('form_1068625');
    form.reset();

}



/******************************************************************************************
 ********************FUNCION comprobar todo*************************************************
 *****************************************************************************************/
function comprobarTODO(){
//alert("a");



    var nombre = document.getElementById('element_1_1');
    var errores = new Array();
    var cadenaErrores="";

    if(nombre.value == null || nombre.value == 0){
        errores[0]=("Campo nombre vacio");
    }
    var apellidos = document.getElementById('element_1_2');
    if(apellidos.value == null || apellidos.value == 0){
        errores[1]=("Campo Apellido vacio");
    }

    var direccion = document.getElementById('element_2_1');
    if(direccion.value == null || direccion.value == 0){
        errores[2]=("Campo Direccion vacio");
    }

    var ciudad = document.getElementById('element_2_3');
    if(ciudad.value == null || ciudad.value == 0){
        errores[3]=("Campo Ciudad vacio");
    }
    var provincia = document.getElementById('element_2_4');
    if(provincia.value == null || provincia.value == 0){
        errores[4]=("Campo provincia vacio");
    }
    var codigo = document.getElementById('element_2_5');
    if(codigo.value == null || codigo.value == 0){
        errores[5]=("Campo Codigo Postal vacio");
    }
    var pais = document.getElementById('element_2_5');
    if(pais.value == null || pais.value == 0){
        errores[6]=("Campo Pais vacio");
    }
    var fecha = document.getElementById('element_2_8');
    if(fecha.value == null || fecha.value == 0){
        errores[7]=("Campo Fecha vacio");
    }


    for(var i = 0;i < errores.length;i++){
        cadenaErrores += "-" + errores[i] + "\n";
    }

    if(cadenaErrores.length > 0){
        alert(cadenaErrores);

    }


    if(errores.length === 0){
        var form=document.getElementById('form_1068625');
        form.onsubmit = enviarForm();
        //form.submit();
    }else{
        return false;
    }



}
