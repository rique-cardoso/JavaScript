// Diferente de Symbol(), Symbol.for() verifica se já existe um Symbol no registro global com o mesmo nome. Se existir, retorna o mesmo Symbol. Caso contrário, cria um novo.

const globalSymbol1 = Symbol.for('shared')
const globalSymbol2 = Symbol.for('shared')
console.log(globalSymbol1 === globalSymbol2) // true

// Recuperando chave de um Symbol Global
console.log('================================')

const sym = Symbol.for('example')
console.log(Symbol.keyFor(sym)) // example