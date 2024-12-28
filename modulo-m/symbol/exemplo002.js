const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
const objeto = {}
objeto[symbol1] = 'Um valor aqui para o symbol1'
objeto[symbol2] = 'Outro valor aqui para o symbol2'
console.log(objeto[symbol1])
console.log(objeto[symbol2])