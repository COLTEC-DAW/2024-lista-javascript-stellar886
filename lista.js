function toList(...values) {
    let list = null;
    for (let i = values.length - 1; i >= 0; i--) {
        list = { value: values[i], rest: list };
    }
    return list;
}

// Solicitar ao usuário que insira os valores separados por vírgulas
var userInput = prompt("Digite os elementos da lista separados por vírgulas: ");

// Converte a string de entrada em uma lista encadeada
var list = toList(...userInput.split(","));

// Exibe a lista encadeada formatada no console
console.log(JSON.stringify(list, null, 2));
