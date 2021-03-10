/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	//DECLARO VARIABLES
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let respuesta;
	let contadorProgramadores;
	let contadorAnalistas;
	let contadorQa;
	let promedioProgramador;
	let promedioAnalista;
	let promedioQa;
	let sueldoProgramador;
	let sueldoAnalista;
	let sueldoQa;
	let banderaHombreMayorSueldo;
	let banderaMujerMayorSueldo;
	let banderaBinarioMayorSueldo;
	let hombreMayorSueldo;
	let mayorSueldoHombre;
	let mujerMayorSueldo;
	let mayorSueldoMujer;
	let noBinarioMayorSueldo;
	let mayorSueldoBinario;
	let cantidadSueldosNoBinarios;
	let sexoMejorSueldo;

	//INICIALIZO LAS VARIABLES
	respuesta="si";
	banderaBinarioMayorSueldo=0;
	banderaHombreMayorSueldo=0;
	banderaMujerMayorSueldo=0;
	contadorProgramadores=0;
	contadorAnalistas=0;
	contadorQa=0;
	sueldoProgramador=0;
	sueldoAnalista=0;
	sueldoQa=0;
	cantidadSueldosNoBinarios=0;

	//INICIO WHILE MIENTRAS LA RESPUESTA SEA SI
	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false)
		{			
			nombre = prompt(" Error nombre incorrecto Ingrese un  nombre valido :  ");
		}

		edad = parseInt(prompt("Ingrese la edad (mayor de 18 años): "));
		while ( edad < 18 )
		{
			edad = parseInt(prompt("Error ingrese edad (mayor de 18 años): "));				
		}

		sexo = prompt("Ingrese el sexo f/m/no binario").toLowerCase();
		while (!(sexo == "f" && sexo == "m"  && sexo == "no binario"))
		{			
			sexo = prompt(" Error ingrese el sexo f/m/otro ").toLowerCase();
		}

		puesto = prompt("Ingrese el puesto (programador - analista - Qa): ").toLowerCase();
		while (!(puesto == "programador" || puesto == "analista"  || puesto == "Qa"))
		{
			puesto = prompt("Ingrese el puesto (programador - analista - Qa): ").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese la edad"));
		while ( edad <= 18 )
		{
			edad = parseInt(prompt("Error ingrese edad "));				
		}
		sueldo = parseInt(prompt("Ingrese su sueldo(entre 15000 y 70000): "));
		while ( sueldo<15000 || sueldo>70000)
		{
			sueldo = parseInt(prompt("Error, Ingrese su sueldo(entre 15000 y 70000): "));				
		}

		if(sexo=="no binario" && sueldo>20000 && sueldo<55000)
		{
			cantidadSueldosNoBinarios++;
		}

		switch(puesto)
		{
			case "programador":
				contadorProgramadores++;
				sueldoProgramador=sueldoProgramador+sueldo;
			break;
			case "analista":
				contadorAnalistas++;
				sueldoAnalista=sueldoAnalista+sueldo;
			break;
			case "Qa":
				contadorQa++;
				sueldoQa=sueldoQa+sueldo;
			break;
		}
		
		if(banderaHombreMayorSueldo==0 && sexo=="m")
		{
			hombreMayorSueldo=nombre;
			mayorSueldoHombre=sueldo;
			banderaHombreMayorSueldo=1;
		}
		else if(sueldo>mayorSueldoHombre && sexo=="m")
		{
			hombreMayorSueldo=nombre;
			mayorSueldoHombre=sueldo;
		}
		if(banderaMujerMayorSueldo==0 && sexo=="f")
		{
			mujerMayorSueldo=nombre;
			mayorSueldoMujer=sueldo;
			banderaMujerMayorSueldo=1;
		}
		else if(sueldo>mayorSueldoMujer && sexo=="f")
		{
			mujerMayorSueldo=nombre;
			mayorSueldoMujer=sueldo;
		}
		if(banderaBinarioMayorSueldo==0 && sexo=="no binario")
		{
			noBinarioMayorSueldo=nombre;
			mayorSueldoBinario=sueldo;
			banderaBinarioMayorSueldo=1;
		}
		else if(sueldo>mayorSueldoBinario && sexo=="no binario")
		{
			noBinarioMayorSueldo=nombre;
			mayorSueldoBinario=sueldo;
		}


	respuesta=prompt("OPRIMA SI PARA CONTINUAR Y NO PARA DETENERSE");
	}//FIN DE WHILE


	promedioProgramador=sueldoProgramador/contadorProgramadores;
	promedioAnalista=sueldoAnalista/contadorAnalistas;
	promedioQa=sueldoQa/contadorQa;

	//COMPARO MEJOR SUELDO
	if(mayorSueldoHombre>mayorSueldoMujer && mayorSueldoHombre>mayorSueldoBinario)
	{
		sexoMejorSueldo="hombre";
	}
	else
	{
		if(mayorSueldoMujer>mayorSueldoHombre && mayorSueldoMujer>mayorSueldoBinario)
		{
			sexoMejorSueldo="Mujer";
		}
		else
		{
			sexoMejorSueldo="no binario";
		}
	}

	//muestro LOS DATOS

	console,log("promedio de sueldos para cada puesto es: ");
	console.log("Analistas: "+promedioAnalista);
	console.log("Programadores: "+promedioProgramador);
	console.log("Qa: "+promedioQa);


	if(banderaHombreMayorSueldo==0)
	{
		console.log("no hay ningun hombre ingresado");
	}
	if(banderaMujerMayorSueldo==0)
	{
		console.log("no hay ninguna mujer ingresada");
	}
	if(banderaBinarioMayorSueldo==0)
	{
		console.log("no hay no binarios ingresados");
	}
	else
	{
		console.log("el sexo del que percibe el mayor sueldo es: "+sexoMejorSueldo);
	}

	console.log("el nombre del empleado femenino con mas sueldo: "+mujerMayorSueldo+" con un sueldo de "+mayorSueldoMujer);
	console.log("la cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es de"+cantidadSueldosNoBinarios);

}

