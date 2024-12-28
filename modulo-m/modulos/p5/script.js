import contato from './contatos.js'
const listaContatos = document.querySelector('#listaContatos')
const gravar = document.querySelector('#btn_gravar')
let deletar
gravar.addEventListener('click', e => {
    e.preventDefault()
    const pessoa = {
        nome: document.querySelector('#f_nome').value,
        telefone: document.querySelector('#f_telefone').value,
        email: document.querySelector('#f_email').value
    }
    contato.addContato(pessoa, listaContatos)
    adicionarEventosDeletar()
})
function adicionarEventosDeletar() {
    const botoesDeletar = [...document.querySelectorAll('.btnDel')]
    botoesDeletar.forEach(botao => {
        botao.onClick = null
        botao.addEventListener('click', e => {
            const idContato = parseInt(botao.getAttribute('id').replace('contato', ''))
            contato.removerContato(idContato, listaContatos)
            adicionarEventosDeletar()
        })
    })
}