//classe que não pode ser instanciada
class Veiculo{
    constructor(){
        if(this.constructor === Veiculo){ //torna proibida a instanciação da classe veiculo
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if(this.ligar === undefined){ //torna obrigatório a implementação do método ligar()
            throw new TypeError("Implementação do método ligar() é obrigatória")
        }
        if(this.desligar === undefined){
            throw new TypeError("Implementação do método desligar() é obrigatória");
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}
class Carro extends Veiculo{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        switch (tipo) {
            case 1:
                this.velocidadeMax = 120
                this.nome = "Normal"
                break;
            case 2:
                this.velocidadeMax = 160
                this.nome = "Esportivo"
                break;
            case 3:
                this.velocidadeMax = 200
                this.nome = "Super Esportivo"
            default:
                break;
        }
        this.velocidadeMax += this.turbo.potencia
    }
    info() {
        console.log(`Nome: ${this.nome}, Velocidade Máxima: ${this.velocidadeMax}\nPortas: ${this.portas} Rodas: ${this.rodas} Ligado: ${this.ligado ? "SIM" : "Não"}`)
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}
class Turbo{
    constructor(e){
        switch (e) {
            case 0:
                this.potencia = 0
                break;
            case 1:
                this.potencia = 50
                break;
            case 2:
                this.potencia = 75
                break;
            case 3:
                this.potencia = 100
                break;
            default:
                console.log("Argumento Inválido")
                break;
        }
    }
}
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velocidadeMax = 300 + this.turbo.potencia
        this.nome = "Carro Especial"
    }
    info(){//já está sobrescrevendo o info() do pai
        super.info()
        console.log(`Potência: ${this.turbo.potencia}`)
    }
}
const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
// const c4 = new Veiculo()
c1.info()
console.log("--------------------------------")
c2.info()
console.log("--------------------------------")
c3.info()