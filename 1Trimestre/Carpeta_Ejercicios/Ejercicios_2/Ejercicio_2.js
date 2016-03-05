/**
 * @author ALEX
 */

function diaSemana() {
	var fecha = new Date();
	var dia = fecha.getDay();
	alert(dia);

	switch(dia) {
	case 1:

		break;
	case 1:
		alert("Hoy es Lunes");
		break;

	case 2:
		alert("Hoy es Martes");
		break;

	case 3:
		alert("Hoy es Miercoles");
		break;

	case 4:
		alert("Hoy es Jueves");
		break;

	case 5:
		alert("Hoy es Viernes");

		break;

	case 6:
		alert("Hoy es Sabado");
		break;

	case 7:
		alert("Hoy es Domingo");
		break;

	}

}