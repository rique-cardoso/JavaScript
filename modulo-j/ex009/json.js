const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos", 
    curso: "JavaScript",
    aulas:{
        aula01: "Introdução",
        aula02: "Tipos primitivos",
        aula03: "Operadores JS"
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.aulas)
console.log(pessoa.aulas.aula01)
const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Tipos primitivos","aula03":"Operadores JS"}}'
const string_json_pessoa = JSON.stringify(pessoa) //stringfy() -> converte um objeto literal em uma string JSON
const objeto_literal_pessoa = JSON.parse(string_pessoa) //parse() -> converte uma string em um objeto
console.log(string_pessoa)
console.log(string_json_pessoa)
console.log(objeto_literal_pessoa)
