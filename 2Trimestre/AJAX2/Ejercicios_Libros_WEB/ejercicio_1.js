
///////////////////////////////////OBJETO FACTURA//////////////////////////////////////////////////
    var factura = {

//DATOS DE LA EMPRESA
        datosEmpresa : {
            nombreEmpresa: 'EmpresaPrueba',
            direccion: 'calle Madrid 34',
            telefono: 99999999999,

        },
//DATOS DEL CLIENTE
    infoCliente :{

        nombreCliente: 'Alejandro Calderon',
        direccion: 'calle Madrid 34',
        telefono: 99999999999,

        },
//array ELEMENTOS DE LA FACTURA
        elementosFactura: [
            {
                descripcion: "Producto 1",
                cantidad: 2,
                precio: 22
            },
            {
                descripcion: "Producto 2",
                cantidad: 3,
                precio: 33
            },
            {
                descripcion: "Producto 3",
                cantidad: 4,
                precio: 44
            }
        ],

    //cierre array elementos


    //ARRAY DATOS DE LA FACTURA
    datosFactura:{

        importeTotal:null,
        tipoIVA:21,
        formaPago:'tarjeta'
    },




    //funcion calcular TOTAL
    calcularTotal:function(){

    var totalPrecioElementos=0;

        for(var i=0; i < this.elementosFactura.length;i++){

            totalPrecioElementos += this.elementosFactura[i].precio * this.elementosFactura[i].cantidad;

        }

    var importeSinIVA=totalPrecioElementos;
    var iva=this.datosFactura['tipoIVA'];
    var total=importeSinIVA*((iva/100) + 1);
    this.datosFactura.importeTotal=total;
    },


    //FUNCION IMPRIMIR DATOS
    imprimirDatos:function(){
        alert("Total factura " + this.datosFactura.importeTotal + "e");
    }

//cierre FACTURA
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LLAMADA A LAS FUNCIONES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

factura.calcularTotal();
factura.imprimirDatos();


