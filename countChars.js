var frase = prompt("frase: ");
var c = prompt("c: ");

function countChars(frase, c) {
    var contador = 0; // Inicializa o contador com 0
    for (let i = 0; i < frase.length; i++) { // Corrige a propriedade length
        if (frase[i] === c) { // Usa estritamente igual
            contador++;
        }
    }
    return contador;
}

console.log(countChars(frase, c));
