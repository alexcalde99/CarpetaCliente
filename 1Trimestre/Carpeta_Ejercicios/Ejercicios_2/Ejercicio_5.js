/**
 * @author ALEX
 */

var prendas = ["Pantalon", "Camiseta", "Calcetines", "Reloj", "Collar", "Vestido", "Zapatos", "Gorra", "Bufanda", "Corbata"];

var precios = [11.95, 12.95, 13.95, 14.95, 15.95, 16.95, 17.95, 18.95, 19.95, 20.95];

var precioIndividual = 0;

alert("Listado de Prendas:" + "\n" + prendas.toString());

var precioConIva = 0;

var prendaSelecionada = "";

/*
 * funcion que devuelve una prenda si existe en el stock
 */
function existePrenda(prendaS) {
	var prendaSelecionada = prendaS;

	for (var i = 0; i < prendas.length; i++) {
		if (prendas[i].toLowerCase() === prendaSelecionada.toLowerCase()) {
			var prendaEncontrada = prendas[i];
			break;
		} else {
			prendaSeleccionada = null;
		}

	}
	;
	return prendaEncontrada;
}

//*************************************************************************************

/*
 * FUNCION QUE DEVUELVE EL PRECIO DE LA PRENDA CON EL IVA AÑADIDO
 */
function precioPrendaConIva(prenda) {
	var prendaBuscarPrecio = prenda;
	var precioFinal = 0;
	var posicionPrecio = 0;

	for (var i = 0; i < prendas.length; i++) {
		if (prendaBuscarPrecio == prendas[i]) {
			var posicionPrecio = i;
			break;
		}

	}

	var precioConIva = precios[posicionPrecio];

	precioConIva = precioConIva * 1.21;

	return precioConIva;

}