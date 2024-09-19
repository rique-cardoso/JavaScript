class Pessoa{
    constructor(nome = "Joãozin Capixaba"){ //se eu não colocar o valor padrão e não entrar com parâmetro nenhum na instancia da classe, ele imprime undefined
        this.nome = nome
    } 
}
let p1 = new Pessoa("Sócrates")
let p2 = new Pessoa(10) //posso passar qualquer valor, mesmo não sendo string
let p3 = new Pessoa()
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)