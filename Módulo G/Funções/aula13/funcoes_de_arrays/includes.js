/*
    ============================================================================================================================================
    includes() -> quando é preciso procurar se um objeto possui um determinado valor ou elemento, porém é retornado um valor booleano
    ============================================================================================================================================
*/

console.log([1, 2, 3, 4, NaN].includes(NaN)) //verifica se existe 2 no array

const people = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi']

console.log(people.includes('Naruto'))
console.log(people.includes('Jiraya'))


const ninjas = [
    {nivel: 'Gennin', name: 'Naruto Uzumaki', age: 16, team: 7},
    {nivel: 'Gennin', name: 'Sasuek Uchiha', age: 16, team: NaN},
    {nivel: 'Chunnin', name: 'Sakura Haruno', age: 16, team: 7},
    {nivel: 'Jonnin', name: 'Kakashi Hatake', age: 32, team: 7}
]

const genins = ninjas.filter(elem => elem.nivel.includes('Gen')) //quantos Gennins, veja que não preciso colocar a palavra por completo.

console.log(genins)