class Carro{
    canal = "CFB Cursos" //propriedade padrão de todos os Carros, não precisa da palavra this
    constructor(nome, tipo){ //se eu não colocar o valor padrão e não entrar com parâmetro nenhum na instancia da classe, ele imprime undefined
        this.nome = nome
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velocidadeMax = 300
        }else if(tipo == 2){
            this.tipo = "Utilitátio"
            this.velocidadeMax = 100
        }else if(tipo == 3){
            this.tipo = "Passeio"
            this.velocidadeMax = 160
        }else{
            this.tipo = "Militar"
            this.velocidadeMax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velocidadeMax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velocidadeMax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(vel){
        this.velocidadeMax = vel
    }
    info(){
        console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}, Velocidade Máxima: ${this.velocidadeMax}, Canal: ${this.canal}`)
    }
}
let c1 = new Carro("Rapidao", 1)
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Bombadão", 5)
let c4 = new Carro("Carrego tudo", 3)
// c1.info()
// c2.info()
console.log(c1.getNome)
console.log(c2.getInfo())
console.log(c3.getInfo()[1])//retorna uma posição específica do array de retorno do método getInfo()
c4.setNome("MudeiDENome")//altera o nome
console.log(c4.getNome())//pega o novo nome
c1.setVelMax(500)
console.log(c1.getVelMax())
c1.info()