const regex = /\d+/ // um ou mais dígitos
const regex1 = /\w+/ // um ou mais letra ou número
const regex2 = /./ // um ou mais qualquer caractere, excetuando-se quebra-de-linha
const regex3 = /\s+/ // um ou mais espaço
console.log('TEST()')
console.log('------')
console.log(regex.test("123")) // true
console.log(regex.test('abc')) // false
console.log(regex1.test("1a2b3c")) // true
console.log(regex1.test("#¨%$%")) // false
console.log(regex2.test("abc123!@#")) // true
console.log(regex2.test("\n")) // false
console.log(regex2.test(" ")) // true
console.log('======================================================')
console.log('MATCH()')
console.log('-------')
const result = "Meu número é 123".match(regex)
const result1 = "******".match(regex1)
const result2 = "9 9999-9999".match(regex2)
console.log(result) // [ '123', index: 13, input: 'Meu número é 123', groups: undefined ]
console.log(result1)
console.log(result2)
console.log('======================================================')
console.log('REPLACE()')
console.log('---------')
const result3 = "Meu número é 999999999".replace(regex, "XXXXXXXXX")
console.log(result3) // Meu número é XXXXXXXXX
console.log('======================================================')
console.log('SPLIT()')
console.log('-------')
const result4 = "João Maria José".split(regex3)
console.log(result4) // [ 'João', 'Maria', 'José' ]