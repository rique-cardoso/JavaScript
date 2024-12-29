const nome = Symbol('nome')
const numero = Symbol('nome')
const corUniforme = Symbol('nome')
const Jogador = {
    [nome]: 'j1',
    [numero]: 10
}
Jogador[corUniforme] = 'amarelo'
for (propriedade in Jogador){
    console.log(propriedade)
}
console.log(Jogador[nome])