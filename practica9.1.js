//ejercicio día de la semana
let dia=prompt("¿Qué día quieres saber si es entre semana o fin de semana?");
//Convirtiendo en minúscula
dia = dia.toLocaleLowerCase();
//Declaro varaibles
let l="lunes";
let m="martes";
let mi="miercoles"||"miércoles";
let j="jueves";
let v="viernes";
let s="sabado"||"sábado";
let d="domingo";

if (dia== l || m || mi || j || v ) {
    alert(dia + " es un día entre semana.");
} else {
    if (dia== s || d) {
        alert(dia +" no es un día entre semana.");
    } else {
        alert(dia +" no es un día de la semana. Por favor ingresa un día de la semana o escríbelo correctamente.");
    }
}