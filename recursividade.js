function mod2(number){
    var ehpar;
    if(number % 2 == 0){
        ehpar = true;
    }else{
        ehpar = false;
    }
  
    return ehpar; 
}

function mod22(number, mod){
    var ehmod;
    if(number % mod == 0){
        ehmod = true;
    }else{
        ehmod = false;
    }
   
    return ehmod; 
}

console.log(mod2(5)); 
console.log(mod22(5, 2))