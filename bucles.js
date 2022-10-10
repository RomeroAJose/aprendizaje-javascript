// escondidas; cuenta regresiva.
let count = 50;
while( count > 0) {
    console.log("estoy contando"+" "+ count);
    count = count - 1;
}
// ejemplo a la inversa
let subiendo = 0
while( subiendo < 10) {
    console.log("acensor subiendo"+" "+ subiendo);
    subiendo = subiendo + 1;
}
// para ahorrar lineas de codigo tmb se podria escribir: basandome en ejm anteriores count-- o subiendo++
// tmb puedo usar condicionales como >= o <=
// tener encuenta el bucle infinito como error; recordar q siempre q la condicion sea verdad se ejecutara.