import React , { Fragment } from "react";	
import styled from '@emotion/styled'
import { primerLetraMayucula  } from '../helper'

const ContenedorResumen = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838F;
	color: #FFF;
	margin-top: 1rem;
`;



const Resumen = ({datos}) => {

	const {marca, year, plan} = datos; 
	
	if  (marca.trim() ==='' || year.trim() ==='' || plan.trim() ==='') return null;

	return ( 
		<ContenedorResumen>
			<h2>Resumen de cotizacion</h2>
			<ul>
				<li>Marca : {primerLetraMayucula(marca)} </li>
				<li>Plan : {primerLetraMayucula(plan)} </li>
				<li>Año del Automovil :  {year} </li>
			</ul>
		</ContenedorResumen>

	 );
}
 
export default Resumen;