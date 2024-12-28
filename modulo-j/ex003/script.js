class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }
    getIdade(){
        return this.idade
    }
    setIdade(idade){
        this.idade = idade
    }
}
let pessoas = []
const btnAdicionar = document.querySelector('#btn_add')
const res = document.querySelector('.res')
btnAdicionar.addEventListener('click', e => {
    const pessoa = new Pessoa(document.querySelector('#f_nome').value, document.querySelector('#f_idade').value)
    pessoas.push(pessoa)
    limparCampos(document.querySelector('#f_nome'), document.querySelector('#f_idade'))
    res.innerHTML += `${pessoas[pessoas.length - 1].nome}, ${pessoas[pessoas.length - 1].idade}<br>`
})
function limparCampos(nome, idade) {
    nome.value = ""
    idade.value = ""
    nome.focus()
}