let nome = new String('Hénrique')
let nome2 = new String('Henrique')
let nome3 = new String('Aristóteles de Estagira')
let nome4 = new String('João')
let sobrenome = new String('Cardoso')
console.log(nome) // [String: 'Henrique']
console.log(typeof(nome)) // object
console.log(nome.charAt(0)) // H
console.log(nome.charCodeAt(0)) // 72
console.log(nome.concat(sobrenome)) // Henrique Cardoso
console.log(nome) // Henrique
// Comparação entre objetos string
console.log(nome == nome2) // false
console.log(nome === nome2) // false
console.log(nome.localeCompare(nome2)) // 0 ===> significa que são iguais
// Comparação entre tipos string (diferentemente de objetos string)
n1 = 'Henrique'
n2 = 'Henrique'
console.log(n1 == n2) // true
console.log(n1 === n2) // true
console.log(n1 == nome) // true
console.log(n1 === nome) // false
console.log(nome.localeCompare(n1)) // 0
console.log(n1.localeCompare(nome)) // 0
console.log(nome.localeCompare(nome3)) // 1 ===> significa que nome é lexicograficamente menor que nome3
console.log(nome.localeCompare(nome4)) // -1 ===> significa que nome é lexicograficamente maior que nome4

/*
    Lexicograficamente maior ou menor, que significa? Dizer que uma string qualquer chamada A é lexicograficamente menor que uma outra string, chamada B; significa que a String A começa com uma letra que, diferentemente da String B, vem antes, dizer que é maior, é porque vem depois.
 */
console.log(nome.valueOf())