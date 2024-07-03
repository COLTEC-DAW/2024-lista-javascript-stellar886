// Implementação da função de ordenação com Bubble Sort
function bubbleSort(array, compareFunction) {
    const n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (compareFunction(array[i], array[i + 1])) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

// Função para comparar dois números para ordenação crescente
function compareAscending(a, b) {
    return a > b;
}

// Função para comparar dois números para ordenação decrescente
function compareDescending(a, b) {
    return a < b;
}

//impar
function compareAscendingOdd(a, b) {
  
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a < b;
    }
   
    return a % 2 !== 0; 
}

function compareDescendingEven(a, b) {
    
    if (a % 2 === 0 && b % 2 === 0) {
        return a < b;
    }
   
    return false;
}

let array = [5, 2, 9, 1, 5, 6, 3];
console.log("Array original:", array);
console.log("Ordenação crescente:", bubbleSort(array.slice(), compareAscending));
console.log("Ordenação decrescente:", bubbleSort(array.slice(), compareDescending));
console.log("Ordenação crescente de ímpares:", bubbleSort(array.slice(), compareAscendingOdd));
console.log("Ordenação decrescente de pares:", bubbleSort(array.slice(), compareDescendingEven));
