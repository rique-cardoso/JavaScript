import { contatos } from "./bancoContatos.js";
let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato: function(id_contato){
        return contatos[id_contato]
    },
    addContato: function(novoContato, destinoDom){
        const pessoa = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }
        contatos.push(pessoa)
        this.atualizarDOM(destinoDom)
    },
    removerContato: function(idContato, destinoDom){
        contatos.splice(idContato, 1)
        this.atualizarDOM(destinoDom)
    },
    atualizarDOM: function(destinoDom){
        destinoDom.innerHTML = ""
        contatos.forEach((elem, index) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'contato')
            const nome = document.createElement('p')
            nome.innerHTML = elem.nome
            const telefone = document.createElement('p')
            telefone.innerHTML = elem.telefone
            const email = document.createElement('p')
            email.innerHTML = elem.email
            const del = document.createElement('button')
            del.setAttribute('id', `contato${index}`)
            del.setAttribute('class', 'btnDel')
            del.innerHTML = 'DEL'
            div.appendChild(nome)
            div.appendChild(telefone)
            div.appendChild(email)
            div.appendChild(del)
            destinoDom.appendChild(div)
        })
    }
}
export default contato