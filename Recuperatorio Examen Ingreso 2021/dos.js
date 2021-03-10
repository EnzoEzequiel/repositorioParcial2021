/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
function mostrar()
{
    //declaro variables
    let nombre;
    let carrera;
    let sexo;
    let cantidadMaterias;
    let notaPromedio;
	let edad;
    let banderaMejorPromedio;
    let mejorPromedioFisica;
    let nombreMejorPromedio;
    let porcentajeFisica;
    let porcentajeQuimica;
    let porcentajeSistemas;
    let banderaAlumnaJoven;
    let nombreAlumnaJoven;
    let edadAlumnaJoven;
    let totalEstudiantes;
    let contadorEstudiantesQuimica;
    let contadorEstudiantesFisica;
    let contadorEstudiantesSistemas;
    let estudianteMasMaterias;
    let edadEstudiantesMasMaterias;
    let banderaMasMaterias;
    let totalMaterias;

    //inicializo
    banderaMasMaterias=0;
    banderaMejorPromedio=0;
    banderaAlumnaJoven=0;
    totalEstudiantes=0;
    contadorEstudiantesFisica=0;
    contadorEstudiantesQuimica=0;
    contadorEstudiantesSistemas=0;
	

	// inicio for
	for( let x= 0; x < 500 ; x++)
	{
        //NOMBRE
        nombre = prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false)
		{			
			nombre = prompt(" Error nombre incorrecto Ingrese un  nombre valido :  ");
		}

        //CARRERA
		carrera = prompt("Ingrese el carrera (Quimica;Fisica;sistemas)").toLowerCase();
		while (!(carrera == "quimica" && carrera == "fisica"  && carrera == "sistemas"))
		{			
			carrera = prompt(" Error nombre deCarrera incorrecto, Ingrese un  nombre deCarrera valido : (Quimica;Fisica;sistemas) ").toLowerCase();
		}
        switch(carrera)
        {
            case "quimica":
				contadorEstudiantesQuimica++;
				
			break;
			case "fisica":
				contadorEstudiantesFisica++;
				
			break;
			case "sistemas":
				contadorEstudiantesSistemas++;
				
			break;
        }
		
        //SEXO
		sexo = prompt("Ingrese el sexo f/m/no binario").toLowerCase();
		while (!(sexo == "f" && sexo == "m"  && sexo == "no binario"))
		{			
			sexo = prompt(" Error ingrese el sexo f/m/otro ").toLowerCase();
		}

        //MATERIAS
		cantidadMaterias = parseInt(prompt("Ingrese la cantidad Materias (entre 1 y 5): "));
		while ( cantidadMaterias < 1 && cantidadMaterias > 5 )
		{
            cantidadMaterias = parseInt(prompt("Ingrese la cantidad Materias (entre 1 y 5): "));
		}
        
		
        //PROMEDIO
		notaPromedio = parseInt(prompt("Ingrese su nota promedio(entre 0 y 10) "));
		while ( notaPromedio < 0 && notaPromedio > 10 )
		{
            notaPromedio = parseInt(prompt("Ingrese su nota promedio(entre 0 y 10) "));
		}

        if(banderaMejorPromedio==0 && carrera=="fisica")
        {
            nombreMejorPromedio=nombre;
            mejorPromedioFisica=notaPromedio;
            banderaMejorPromedio=1;
        }
        else if(notaPromedio>mejorPromedioFisica && carrera=="fisica")
        {
            nombreMejorPromedio=nombre;
            mejorPromedioFisica=notaPromedio;
        }

        //EDAD
        edad = parseInt(prompt("Ingrese la edad (mayor de 18 años): "));
		while ( edad < 18 )
		{
			edad = parseInt(prompt("Error ingrese edad (mayor de 18 años): "));				
		}
        //alumna joven
        if(banderaAlumnaJoven==0 && sexo=="f")
        {
            nombreAlumnaJoven=nombre;
            edadAlumnaJoven=edad;
            banderaAlumnaJoven=1;
        }
        else if(edad<edadAlumnaJoven && sexo=="f")
        {
            nombreAlumnaJoven=nombre;
            edadAlumnaJoven=edad;
        }

        //ESTUDIANTE MAS MATERIAS
        if(banderaMasMaterias==0 && (carrera=="fisica" || carrera=="sistemas"))
        {
            estudianteMasMaterias=nombre;
            edadEstudiantesMasMaterias=edad;
            totalMaterias=cantidadMaterias;
            banderaMasMaterias=1;
        }
        else if(cantidadMaterias>totalMaterias && (carrera=="fisica" || carrera=="sistemas"))
        {
            estudianteMasMaterias=nombre;
            edadEstudiantesMasMaterias=edad;
            totalMaterias=cantidadMaterias;
        }
	
		totalEstudiantes++;
	} 
	// fin for
    porcentajeFisica=contadorEstudiantesFisica*100/totalEstudiantes;
    porcentajeQuimica=contadorEstudiantesQuimica*100/totalEstudiantes;
    porcentajeSistemas=contadorEstudiantesSistemas*100/totalEstudiantes;

    
    if(banderaMejorPromedio==0)
    {
        console.log("no hay alumnos que estudien fisica");
    }
    else
    {
        console.log("El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo) es: "+mejorPromedioFisica); 
    }

    if(banderaAlumnaJoven==0)
    {
        console.log("no hay alumnas");
    }
    else
    {
        console.log("El nombre de la alumna mas joven es: "+nombreAlumnaJoven+ " con la edad de "+edadAlumnaJoven);
    }
    
    console.log("Porcentaje de estudiantes que estudia cada carrera: ");
    if(contadorEstudiantesFisica==0)
    {
        console.log("no hay estudiantes de fisica");
    }
    else
    {
        console.log("Fisica: "+porcentajeFisica);
    }
    if(contadorEstudiantesQuimica==0)
    {
        console.log("no hay estudiantes de quimica");
    }
    else
    {
        console.log("quimica: "+porcentajeQuimica);
    }
    if(contadorEstudiantesSistemas==0)
    {
        console.log("no hay estudiantes de sistemas");
    }
    else
    {
        console.log("sistemas: "+porcentajeSistemas);
    }
    
    

    console.log(" La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es: "+estudianteMasMaterias+ " con"+totalMaterias+" Materias");
}
