//FUNÇÃO PARAMETRIZADA

//Posso passar qualquer valor para o parâmetro

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(10, 5))

function dobro(n1){
    return n1 << 1
}

console.log(dobro(10))

//E se eu passar somente um valor em uma função que recebe dois parâmetros?

console.log(soma(10)) //NaN

//Como evitar isso? Indicando valores padrões para os parâmetros:

function multiplicacao(n1=0, n2=0) {
    return n1 * n2
}

console.log(multiplicacao(10)) //apresenta a multiplicação de n1 (valor passado) pelo valor padrão de n2, já que este não foi informado, evitando a mensagem NaN.

// Outra forma de utilizar o valor padrão: 

const valorPadrao = 0

function subtracao(n1=valorPadrao, n2=valorPadrao) {
    return n1 - n2
}

console.log(subtracao(10))


// Alterando o valor de uma variável já existente em uma função

/*
let valor = 0

console.log(valor)

function somaValor(x) {
    return valor + x
}

valor = somaValor(10)

console.log(valor)

valor = somaValor(5)

console.log(valor)
*/

let valor = 0

console.log(valor)

function somaValor(x) {
    return valor += x
}

console.log(somaValor(10))
console.log(somaValor(5))
