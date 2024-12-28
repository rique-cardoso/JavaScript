/*
    ============================================================================================================================================
    find() -> quando é preciso procurar ou verificar por um valor dentro de um array ou objeto, sendo que o retorno vai ser do primeiro elemento que satisfazer o teste
    ============================================================================================================================================
*/

const pizzas = ['mussarela', 'calabresa', 'portuguesa', 'marguerita']

const foundPizzas = pizzas.find( p => p.startsWith('m'))

console.log(foundPizzas)

const frutas = [
    {nome: 'acerola', quantidade: 204},
    {nome: 'laranja', quantidade: 10},
    {nome: 'melancia', quantidade: 2},
    {nome: 'morango', quantidade: 5}
]

const morango = frutas.find(p => p.nome === 'morango')

console.log(morango)