//Como transformar substituir a palavra class por function e manter o funcionamento de classe
function Pessoa(nome, idade){
    this.nome = nome,
    this.idade = idade
    this.getNome = function(){
        return this.nome
    }
    this.setNome = function(nome){
        this.nome = nome
    }
    this.getIdade = function(){
        return this.idade
    }
    this.setIdade = function(idade){
        this.idade = idade
    }
    this.info = function(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
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