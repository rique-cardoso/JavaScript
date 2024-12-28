/*
    ============================================================================================================================================
    some() -> quando é preciso testar se pelo menos um elemento do array passa por um teste específico
    ============================================================================================================================================
*/

const idades = [14, 19, 23, 51, 53]

console.log(idades.some(elem => elem >= 18))//true se pelo menos um número for maior que 18