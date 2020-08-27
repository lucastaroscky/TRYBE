function Nomes (){
    var array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    var quantidadeNome = 0;
    var resultado = 0

    for(let i in array){
        if(array[i].length > quantidadeNome){
            quantidadeNome = array[i].length;
            resultado = array[i];
        }
    }
    
    return resultado;
}
console.log(Nomes());


