//métodos de mesma assinatura com comportamentos diferentes
class Carro{
    constructor(tipo, estagioTurbo){
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
        console.log(`Nome: ${this.nome}, Velocidade Máxima: ${this.velocidadeMax}`)
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
c1.info()
console.log("--------------------------------")
c2.info()
console.log("--------------------------------")
c3.info()