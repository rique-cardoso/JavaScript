//Serve para quando preciso adicionar uma propriedade ou método para um objeto, principalmente para objetos de função
const Nave=function(energia) {
    this.energia = energia
    this.disparos = 100
}
const n1 = new Nave(100)
Nave.prototype.vidas = 3 //add uma propriedade vida
Nave.prototype.disparar = function() {
    if(this.disparos > 0){
        this.disparos--
    }
}
console.log(Nave)
console.log(n1)
console.log(n1.energia)
n1.vidas = 5
console.log(n1.vidas)
console.log(n1.disparos)
n1.disparar()
console.log(n1.disparos)