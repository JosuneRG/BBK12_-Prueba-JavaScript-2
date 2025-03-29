// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase
function contarLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

console.log("Cantidad de veces que aparece 'a':", contarLetra("El cuento de caperucita roja", "a")); 

// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números
// Entregad vuestra solución por campus virtual. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones.
//  Podéis enviar una primera solución y luego añadir otras en comentarios.
function imprimirImpares(numero) 
{
    for (let i = numero; i < numero + 50; i++) 
    {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

imprimirImpares(1);