//FUNÇÕES RECURSIVAS

//É uma função que chama a si mesma uma determinada quantidade de vezes, para não se criar uma função infinita, é necessário que haja um critério de parada.

/* let soma = 0

for (let i = 1; i <= 5; i++){
    soma += i
} */

/* function somaRecursiva(n) {
    let soma = 0

    for (let i = 1; i <= n; i++) {
        soma += i
    }

    return soma
}

console.log(somaRecursiva(5)) */

function somaRecursiva(n) {
    //Critério de parada:
    if(n === 1){
        return 1
    }
    
    return n + somaRecursiva(n - 1)
}

console.log(somaRecursiva(5))