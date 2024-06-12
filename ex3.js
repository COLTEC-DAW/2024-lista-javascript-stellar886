
let palavra = prompt("Informe a palavra");

let ehPalindromo = true;

for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        ehPalindromo = false;
        break; // Pode sair do laço, já sabemos que não é um palíndromo
    }
}

if (ehPalindromo) {
    console.log("é um palíndromo");
} else {
    console.log("não é um palíndromo");
}
