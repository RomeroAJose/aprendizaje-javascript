
function saludar () {
    console.log("hola");
}
saludar();

// dentro de los parentesis recibo un valor.

function ver (valor) {
    console.log(valor);
    console.log("muestra valor: " + valor);
}
ver (8);
ver ("jose");
ver (true);


//con la funcion: interactuo sin volver a escribir las linea de codigo q estan en la function, 
// lo unico q hago es llamarla y reutilizo las lineas de codigo.


function sumar(num1, num2) {
    resultado = num1 + num2;
   console.log("La suma es: "+ resultado)
}
 
function add (n1, n2) { 
     console.log( "resultado " + [n1 + n2]);
 }
 add (17, 70);
 add (17, 06);
 add (1987,132);
