//condicionales
let nombre=prompt("¿Cuál es tu nombre?");
let edad=prompt("¿Cuál es tu edad?");

//Que pasa sino ponen la edad (Programación defensiva - validaciones)

if (edad<18) {
    alert("Mucho gusto " + nombre + " y tu edad es " + edad + " lo sentimos, no cumples con la edad mínima para ingresar a este sitio web.");
} else {
    alert("Mucho gusto " + nombre + " y tu edad es " + edad + " bienvenido, disfruta del sitio web más violento de la red.");
}