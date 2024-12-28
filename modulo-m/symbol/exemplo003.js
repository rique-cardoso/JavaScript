const hidden = Symbol('hidden')
const user = {
    name: 'Henrique',
    age: 19,
    [hidden]: 'Um valor "escondido" em uma propriedade oculta'
}
console.log(Object.keys(user)) // ['name', 'age']
console.log(user[hidden]) // Um valor "escondido" em uma propriedade oculta  