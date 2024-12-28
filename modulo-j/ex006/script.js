let pessoas = []
const adicionar = document.querySelector('#btn_add')
const resposta = document.querySelector('.res')
adicionar.addEventListener('click', e => {
    const Pessoa={
        nome: document.querySelector('#f_nome').value,
        idade: document.querySelector('#f_idade').value
    }
    pessoas.push(Pessoa)
    limparCampos(document.querySelector('#f_nome'), document.querySelector('#f_idade'))
    resposta.innerHTML += `${Pessoa.nome}, ${Pessoa.idade}<br>`;
})
function limparCampos(nome, idade){
    nome.value = ""
    idade.value = ""
    nome.focus()
}