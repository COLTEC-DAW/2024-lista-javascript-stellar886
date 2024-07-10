num1 = prompt ("menor num: ");
num2 = prompt ("maior num: ");
variacao = prompt("variacao: ");
num1 = Number(num1);
num2 = Number(num2);
variacao = Number(variacao);

function range(min,max, va){
    for(let i = min; i <= max; i = i + va){
        console.log(i);
    }
}

range(num1, num2, variacao);
