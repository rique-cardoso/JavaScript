/*
    ============================================================================================================================================
    filter() -> usa-se quando é preciso remover elementos indesejados com base em algumas necessidades
    ============================================================================================================================================
*/

// Um filter(), por padrão, recebe 3 parâmetros: 1° valor; 2° posição; 3°Array.

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

function impares(elem){
    if(elem % 2 != 0){
        return elem
    }
}

const odd_yetAnotherArray = yetAnotherArray.filter(impares)

const even_yetAnotherArray = yetAnotherArray.filter((elem) => { if(elem % 2 === 0){ return elem}})

for (const iterator of odd_yetAnotherArray) {
    console.log(iterator)
}

console.log("=========\n==========")

for (const iterator of even_yetAnotherArray) {
    console.log(iterator)
}

/*Eliminando repetições */

console.log("=========\n==========")

const uniqueArray = yetAnotherArray.filter((elem, index, array) => array.indexOf(elem) === index) //retorna o valor se for verdadeiro

for (const iterator of uniqueArray) {
    console.log(iterator)
}