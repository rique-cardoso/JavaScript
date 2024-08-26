//OPERADOR THIS
//O operador this serve para fazer referência a um elemento dentro de uma função.
//AO INVÉS DE: 
/*
function aluno(nome, nota){
    let nomeX = nome; //para evitar o uso de um nome de variável diferente para que ele guarde o parâmetro nome na memória, usamos o operador this
}
*/

//USAMOS: 

/* function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dado_anonimo = function(){
        setTimeout(function(){
            //==> setTimeout() cria uma nova instância do this, dessa forma o resultado apresentado será undefined, pois, nessa nova instância não foi passado nenhum valor e é possível corrigir este erro utilizando arrow functions ao invés de funções anônimas comuns
            console.log(this.nome)
            console.log(this.nota)
        }, 10000)
    }
}

const aluno1 = new aluno('henrique', 15)
aluno1.dado_anonimo() */

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dado_anonimo = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 10000)
    }
}

const aluno1 = new aluno('henrique', 15)
aluno1.dado_anonimo()