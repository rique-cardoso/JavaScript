const sym1 = Symbol('description')
const sym2 = Symbol('description')
console.log(sym1 === sym2) // false
console.log(sym1.description === sym2.description) // true