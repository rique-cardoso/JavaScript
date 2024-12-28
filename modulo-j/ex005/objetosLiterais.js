//Objetos Literais: msm com instancias diferentes, ele aponta para o mesmo objeto
const Pessoa={
    nome: "Platão",
    idade: 18,
    //criação de métodos com objetos literais
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    }
}

const p2 = Pessoa
const p3 = Pessoa
p2.nome = "Aristóteles"
p3["nome"] = "Diógenes"
p2.setNome("Cláudison")
console.log(Pessoa.nome) //Diógenes
console.log(p2.getNome()) //Diógenes
console.log(p3.nome) //Diógenes