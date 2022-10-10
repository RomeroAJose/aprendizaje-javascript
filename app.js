// asi creo un comentario, sirve para explicar, recordar, enseñar que dice, hace, el codigo
// esto es un ejemplo a continuacion document es el archivo, write la orden para q escriba "hola bienvenidos"
//es el saludo
document.write("<h1>Hola bienvenidos</h1>");
/* otra forma de crear un comentario, camelcase se denomina a la forma de escribir codigo asi: 
userName; estoEsUnEjemplo;  de esta forma puedo leer y ver donde comienza una palabra. Otra forma es:
user_name; esto_es_un_ejemplo. con esto finalizo el comentario*/


/* el siguiente ejemplo se le llama concatenar, q es encadenar string(del ingles cadena) */
let name = "John "
let lastName = "Carter"
let complitName = name + lastName
// otra forma seria let complitName = name + " " + lastName de esta forma me dejaria un espacio entre palabras
console.log(complitName)

// condicionales 
/* flujo de datos, para controlar los flujos de datos podemos usar: if  un ejemplo practico seria la comparacion 
de contraseñas en un login*/

let password = 'jose123'
let passwordBaseDate = 'jose123'
let resultPassword = password == passwordBaseDate
if (resultPassword == true )  {
 console.log("Contraseña correcta, acceso concedido")
}
if (resultPassword === false) {
    console.log("contraseña incorrecta, intente nuevamente")
}
// los if ejecutados son las dos posibilidades, en este caso es verdad (true) y aparecera la leyenda: contraseña correcta
// acceso concedido, a continuacion otra forma y mas facil: if ... else

if (resultPassword == true)  {
    console.log("Contraseña correcta acceso concedido")
} else {console.log("contraseña incorrecta intente nuevamente") }

// indecsacion los elementos se cuentan desde 0 en adelante
// length lo que hace es darme el tamaño del array

let names = [ "john","joe","moe","larry"]
console.log(names);
console.log(names[2]);
console.log(names.length);
for(let index = 0; index <= names.length; index++ ) {
    console.log(names[index]);
}
for(let i = names.length -1; i > 0; i--) {
    console.log(names[i]);
}
