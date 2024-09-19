/*Coleções iteráveis:
    .Array
    .String
    .Map
    .Set
*/

const valores = [10, 8, 9, 2, 15, 4, 7, 0]
const iteradorValores = valores[Symbol.iterator]()

console.log(valores)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value)
console.log(iteradorValores.next().value) //chegou no final, done: true

//Conseguimos, também, iterar sobre coleções String

const text = "Youtube"
const iteradorTexto = text[Symbol.iterator]()

console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))
console.log((iteradorTexto.next()))