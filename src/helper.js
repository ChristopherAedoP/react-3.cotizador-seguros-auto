
//diferencia de años
export function obtenerDiferenciaYear(year){
	return new Date().getFullYear() - year;
}

//calcular total a pgar por marca
export function calcularMarca(marca) {
	let incremento;

	switch (marca) {
		case "europeo":
			incremento = 1.30;
			break;
		case "americano":
			incremento = 1.15;
			break;
		case "asiatico":
			incremento = 1.05;
			break;			
		default:
			break;
	}

	return incremento;
}

//calcular tipo seguro
export function obtenerPlan (plan){
	let incremento;

	switch (plan) {
		case "basico":
			incremento = 1.20;
			break;
		case "completo":
			incremento = 1.50;
			break;
		default:
			break;
	}

	return incremento;
}

//muestra la primera letra mayuscula
export function primerLetraMayucula(texto) {
	return texto.charAt(0).toUpperCase() + texto.slice(1);
}
