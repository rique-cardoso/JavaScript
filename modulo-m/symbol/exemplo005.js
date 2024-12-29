const sym1 = Symbol('Prop1')
const sym2 = Symbol('Prop2')
const obj = {
    [sym1]: 'Valor 1',
    [sym2]: 'Valor 2',
    normalKey: 'Valor 3'
}
console.log(Object.getOwnPropertySymbols(obj)) // Retorna todos os Symbols do objeto
console.log(Reflect.ownKeys(obj)) // Retorna todas as propriedades, incluindo Symbols, do objeto