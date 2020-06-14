// indexOf
function maiorValor() {

    let valor = 0;
    let numbers = [2, 3, 6, 7, 10, 1];
    for(let i=0; i < numbers.length; i+=1){
        if(numbers[i] > valor){
            valor = numbers[i]
       
    }
}return numbers.indexOf(valor)
}
 console.log(maiorValor())

// for 
 function maiorValor() {

    let valor = 0;
    let numbers = [2, 3, 6, 7, 10, 1];
    let indice = 0;

    for(let i=0; i < numbers.length; i+=1){
        if(numbers[i] > valor){
            valor = numbers[i]
            indice = i;
       
    }
}return indice
}
 console.log(maiorValor())

//for in

 function maiorValor() {

    let valor = 0;
    let numbers = [2, 3, 6, 7, 10, 1];
    let indice = 0;
    for(let i in numbers){
        if(numbers[i] > valor){
            valor = numbers[i]
            indice = i;
            
        }
    }
  return indice
} 
console.log(maiorValor())

