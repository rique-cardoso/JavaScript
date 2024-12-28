const mySymbol = Symbol()
console.log(typeof(mySymbol))
console.log('=======================')
const symbol1 = Symbol("description")
const symbol2 = Symbol("description")
console.log(symbol1 === symbol2) // false - todo symbol é único
console.log(String(symbol1)) // Symbol(description)
console.log(typeof(String(symbol1))) // String - converção para String explicitamente
// console.log(symbol1 + symbol2) // ERRO - não pode ser convertido implicitamente para string
const stringSymbol1 = String(symbol1)
const stringSymbol2 = String(symbol2)
console.log(stringSymbol1 + stringSymbol2)
// symbol1 = 10 // ERRO - todo symbol é imutável  