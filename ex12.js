function toList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

// Solicitar ao usuário para informar os elementos do array separados por vírgulas
var userInput = prompt("Digite os elementos do array separados por vírgulas: ");
var array = userInput.split(",").map(Number);  // Converte a string de entrada em um array de números

var list = toList(array);
console.log(JSON.stringify(list, null, 2));  // Exibe a lista encadeada formatada no console
