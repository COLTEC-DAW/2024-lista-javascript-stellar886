function createMatrix(rows, cols, matrixFunction) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = matrixFunction(i, j);
        }
    }

    return matrix;
}

function somar(i, j) {
    return i + j;
}

function multip(i, j) {
    return i * j;
}

function igual(i, j) {
    return i === j ? 1 : 0;
}

function quadrado(i, j) {
    return (i ** 2) / (j + 1);
}

function maior(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

let rows = 5;
let cols = 5;

console.log("Matriz usando m[i,j] = i + j:");
console.log(createMatrix(2, 2, somar));

console.log("\nMatriz usando [i,j] = i * j:");
console.log(createMatrix(3, 5, multip));

console.log("\nMatriz usando m[i,j] = i == j ? 1 : 0:");
console.log(createMatrix(1, 1, igual));

console.log("\nMatriz usando [i,j] = i^2/(j+1):");
console.log(createMatrix(4, 2, quadrado));

console.log("\nMatriz usando m[i,j] = i > j ? 1 : (i < j ? 5 : 0):");
console.log(createMatrix(2, 1, maior));
