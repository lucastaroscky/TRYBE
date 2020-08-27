function menorValor (){

    let array = [2, 4, 6, 7, 10, 0, -3];
    let valor = 0;
    let indice = 0;

    for(let i in array){
        if(array[i] < valor){
            valor = array[i];
            indice = i;
        }
    }
    return indice;
}
console.log(menorValor())