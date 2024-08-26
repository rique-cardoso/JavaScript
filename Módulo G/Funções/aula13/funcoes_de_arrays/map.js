/*
    ============================================================================================================================================
    map() -> quando for preciso introduzir/mapear todos os elementos de um array para um outro conjunto de valores
    ============================================================================================================================================
*/

const numbers = [1, 4, 5, 9, 14, 23]

//A função map() não altera o valor da variável e, portanto, é necessário atribuí-lo a outra variável

const doubleNumbers = numbers.map(elem => elem << 1) //Dá para utilizar tanto arrowFunction quanto funções anônimas

for (const iterator of doubleNumbers) {
    console.log(iterator)
}

/* OU */ console.log("=========\n==========")

const numbers1 = [2, 8, 10, 18, 28, 46]

function doubleNumbers1(elem) {
    return elem << 1
}

const doubledNumbers1 = numbers1.map(doubleNumbers1)

for (const iterator of doubledNumbers1) {
    console.log(iterator)
}


/*Conversor Fahrenheit para Celcius utilizando map()*/

const fahrenheit = [12, 32, 64, 90, 29]

const celcius = fahrenheit.map(elem => Math.round((elem - 32) * (5 / 9)))

console.log("=========\n==========")

for (const iterator of celcius) {
    console.log(`${iterator} °C`)
}