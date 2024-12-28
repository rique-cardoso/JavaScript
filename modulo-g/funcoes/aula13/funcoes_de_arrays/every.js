/*
    ============================================================================================================================================
    every() -> quando é preciso testar se todos os elementos de um array passam por um determinado teste
    ============================================================================================================================================
*/

// para não confundir, filter() retorna um novo objeto ou array, enquanto que every() retorna um valor booleano

const idades = [14, 19, 23, 51, 53]

console.log(idades.every(elem => elem >= 18)) //vai retornar true se todos os elementos do array forem maior ou igual a 18, false se contrário.