//FOR IN E FOR OF

let num = [10, 20, 30, 40, 50]

//Percorrendo o array utilizando um loop tradicional

console.log("LOOP FOR TRADICIONAL:\n")

for (let index = 0; index < num.length; index++) {
    //console.log(index) -> imprime a posição do elemento
    console.log(num[index]) //imprime o elemento do array
}

console.log('========\n========')

//Percorrendo o array utilizando um loop FOR IN

console.log("LOOP FOR IN:\n")

for (const key in num) {
    //console.log(key) -> imprime a posição do elemento
    console.log(num[key]) //imprime o elemento do array
}

console.log('========\n========')

//Percorrendo o array utilizando um loop FOR OF

console.log("LOOP FOR OF:\n")

for (const iterator of num) {
    console.log(iterator) //imprime o elemento do array
}