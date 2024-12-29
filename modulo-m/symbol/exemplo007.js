const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('Bruno')
// const s4 = s3
const s4 = Symbol.for('Bruno')
console.log(s1)
console.log(s2)
console.log(s1 === s2) // false
console.log(typeof(s1k))
console.log(s3 === s4) // True
console.log(Symbol.keyFor(s1)) // Undefined
console.log(Symbol.keyFor(s3)) // Bruno
// keyFor() trabalha somente com os registradores globais