function deepEquals(obj1, obj2) {
    if (obj1 === obj2) {
        console.log("iguais");
    }else{
        console.log("diferentes");
    }
}


    let obj1 = prompt("Insira o primeiro objeto");
    let obj2 = prompt("Insira o segundo objeto");

   

        const result = deepEquals(obj1, obj2);
       console.log(result);