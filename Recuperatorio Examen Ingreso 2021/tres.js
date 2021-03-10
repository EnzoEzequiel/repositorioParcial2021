/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, 
teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
 el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,
 la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
function mostrar()
{
	//DECLARO LAS VARIABLES
	let nombreCliente;
	let cantidadIngresada;
   	let marcaIngresada;
   	let resultado;
   	let precioInicial;
   	let descuentoPorcentaje;
	let respuesta;
	//INICIALIZO
	respuesta="si";
	precioInicial=35;

	while(respuesta=="si")
	{
		//NOMBRE
		nombreCliente = prompt("Ingrese su nombre: ");
		while (isNaN(nombreCliente)==false)
		{			
			nombreCliente = prompt(" Error nombre de Cliente, incorrecto Ingrese un nombre valido :  ");
		}

		//CANTIDAD
		cantidadIngresada = parseInt(prompt("Ingrese la cantidad: "));
		while ( cantidadIngresada <= 0 )
		{
			cantidadIngresada = parseInt(prompt("Error, Ingrese la cantidad: "));				
		}

		//MARCA
		marcaIngresada = prompt("Ingrese el marca (FelipeLamparas - ArgentinaLuz - Illuminatis): ").toLowerCase();
		while (!(marcaIngresada == "prograFelipeLamparas" || marcaIngresada == "ArgentinaLuz"  || marcaIngresada == "Illuminatis"))
		{
			marcaIngresada = prompt("Ingrese el marca (FelipeLamparas - ArgentinaLuz - Illuminatis): ").toLowerCase();
		}

		if(cantidadIngresada>5)
		{
			switch(marcaIngresada)
			{
				case "FelipeLamparas":
					descuentoPorcentaje=10;
				break;
				default:
				break;
			}
		}

		else if(cantidadIngresada>=3)
		{
			switch(marcaIngresada)
			{
				case "FelipeLamparas":
					descuentoPorcentaje=5;
				break;
				default:
				break;
			}
		}


	}//FIN DEL WHILE

	console.log("Cuanto recauda la empresa en concepto de todas las ventas realizadas.");
	console.log("Cuanto perdio la empresa en concepto de descuentos.");
	console.log("El promedio de la cantidad de lamparas vendidas de cada marca.");
	console.log("La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/")

}
