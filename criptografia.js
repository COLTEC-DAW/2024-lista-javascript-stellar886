// Função para criptografar uma string usando um critério de criptografia
function criptografia(inputString, encryptionFunction) {
    return encryptionFunction(inputString);
}

function caesarCipher(inputString, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        let index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            let newIndex = (index + shift) % alphabet.length;
            if (newIndex < 0) {
                newIndex += alphabet.length;
            }
            let newChar = alphabet.charAt(newIndex);
            result += (char === char.toUpperCase()) ? newChar : newChar.toLowerCase();
        } else {
            result += char; // Mantém caracteres que não estão no alfabeto
        }
    }

    return result;
}

// Teste da função de criptografia usando a cifra de César
let text = "HELLO WORLD";
let textCrip = criptografia(text, (input) => caesarCipher(input, 3));
console.log("Texto original:", text);
console.log("Texto criptografado:", textCrip);
