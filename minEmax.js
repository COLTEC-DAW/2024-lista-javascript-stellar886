var valor1 = prompt("Valor 1: ");
var valor2 = prompt("Valor 2: ");

function min(a, b){
    if(a > b){
        return b;
    }else{
        return a;
    }
}


function max(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

console.log(min(valor1, valor2));

console.log(max(valor1, valor2));

