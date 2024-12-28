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
        const div = document.createElement('div')
        div.setAttribute('class', 'contato')
        const nome = document.createElement('p')
        nome.innerHTML = novoContato.nome
        const telefone = document.createElement('p')
        telefone.innerHTML = novoContato.telefone
        const email = document.createElement('p')
        email.innerHTML = novoContato.email
        div.appendChild(nome)
        div.appendChild(telefone)
        div.appendChild(email)
        destinoDom.appendChild(div)
    }
}
export default contato