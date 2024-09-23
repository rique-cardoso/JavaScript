//Um membro static pode ser invocado sem haver uma instância de objeto da classe
class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
        // this.alerta = false
    }
    info=function(){
        console.log(`Energia ${this.energia}, Alerta: ${(Npc.alerta ? "Sim" : "Não")}`)
        console.log("-------------------------")
    }
    static alertar = function(){
        Npc.alerta = true
    }
}
const npc1 = new Npc(100)
// Npc.alerta = true //muda o alerta da classe como um todo
Npc.alertar() //método independete da instancia
const npc2 = new Npc(200)
const npc3 = new Npc(50)
npc1.info()
npc2.info()
npc3.info()