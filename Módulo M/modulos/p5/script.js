import contato from './contatos.js'
const listaContatos = document.querySelector('#listaContatos')
const gravar = document.querySelector('#btn_gravar')
gravar.addEventListener('click', e => {
    const pessoa = {
        nome: document.querySelector('#f_nome').value,
        telefone: document.querySelector('#f_telefone').value,
        email: document.querySelector('#f_email').value
    }
    contato.addContato(pessoa, listaContatos)
    console.log(contato.getTodosContatos())
})