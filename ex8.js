var contador; 

function countChars(frase, c){
    for(let i = 0; i < frase.lenght; i++){
        if(frase[0] == c){
            contador++;
        }
    }
    return contador; 
}