function reverseArray(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let valores = prompt("Digite o array ");

let reversedArray = reverseArray(valores);
console.log(reversedArray);

