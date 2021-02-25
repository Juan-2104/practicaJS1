//ejercicio día de la semana
let dia=prompt("¿Qué día quieres saber si es entre semana o fin de semana?");
//Convertir lo que el usuario escriba en minúscula
dia = dia.toLocaleLowerCase();
//Validar
if (dia== "lunes" || dia=="martes" || dia=="miercoles" || dia=="miércoles" || dia=="jueves" || dia=="viernes" ) {
    alert(dia + " es un día entre semana.");
} else {
    if (dia== "sabado" || dia=="sábado" || dia=="domingo") {
        alert(dia +" no es un día entre semana.");
    } else {
        alert(dia +" no es un día de la semana. Por favor ingresa un día de la semana o escríbelo correctamente.");
    }
}