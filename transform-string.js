function transform(inputString, transformFunction) {
    return transformFunction(inputString);
}

// Função de transformação: Caixa alta nas vogais
function altaVogais(inputString) {
    return inputString.replace(/[aeiou]/ig, function(match) {
        return match.toUpperCase();
    });
}

// Função de transformação: Caixa alta nas consoantes
function altaConsoante(inputString) {
    return inputString.replace(/[bcdfghjklmnpqrstvwxyz]/ig, function(match) {
        return match.toUpperCase();
    });
}

// Função de transformação: Caixa baixa nas vogais
function baixaVogal(inputString) {
    return inputString.replace(/[aeiou]/ig, function(match) {
        return match.toLowerCase();
    });
}

// Função de transformação: Caixa baixa nas consoantes
function baixaConsoante(inputString) {
    return inputString.replace(/[bcdfghjklmnpqrstvwxyz]/ig, function(match) {
        return match.toLowerCase();
    });
}


let inputString = "Hello World";

console.log("Texto original:", inputString);

console.log("Caixa alta nas vogais:", transform(inputString, altaVogais));
console.log("Caixa alta nas consoantes:", transform(inputString, altaConsoante));
console.log("Caixa baixa nas vogais:", transform(inputString, baixaVogal));
console.log("Caixa baixa nas consoantes:", transform(inputString, baixaConsoante));
