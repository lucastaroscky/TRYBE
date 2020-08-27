## JAVASCRIPT - OBJETOS
###### Exercícios
1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

- Exemplo de palíndromo: arara.

- verificaPalindrome("arara");

- Retorno esperado: true

- verificaPalindrome("desenvolvimento");

- Retorno esperado: false

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

- Array de teste: [2, 3, 6, 7, 10, 1];.

- Valor esperado no retorno da função: 4.

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

- Array de teste: [2, 4, 6, 7, 10, 0, -3];.

- Valor esperado no retorno da função: 6.

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

- Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

- Valor esperado no retorno da função: Fernanda.

5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

- Array de teste: [2, 3, 2, 5, 8, 2, 3];.

- Valor esperado no retorno da função: 2.

6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

- Valor de teste: N = 5.

- Valor esperado no retorno da função: 1+2+3+4+5 = 15.

7. Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

- Valor de teste: "trybe" e "be"

- Valor esperado no retorno da função: true

- verificaFimPalavra("trybe", "be");

- Retorno esperado: true

- verificaFimPalavra("joaofernando", "fernan");

- Retorno esperado: false

######BONUS

1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:

- Uma string é um array de caracteres, então cada elemento do array é uma letra.
- O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

- Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

- Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
