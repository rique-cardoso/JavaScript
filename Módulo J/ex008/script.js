const tipoMilitar = document.querySelector('#f_tipoMilitar')
const tipoNormal = document.querySelector('#f_tipoNormal')
const blindagem = document.querySelector('#f_blindagem')
const municao = document.querySelector('#f_municao')
const carros = document.querySelector('#carros')
const adicionarCarro = document.querySelector('#btn_addCarro')
const nome = document.querySelector('#f_nome')
const portas = document.querySelector('#f_portas')
let veiculos = []
const removerCarros = carroRemovido => {
    veiculos = veiculos.filter(e => e.nome != carroRemovido)
}
tipoMilitar.addEventListener('click', e => {
    nome.value = ""
    portas.value = 0
    blindagem.value = 0
    municao.value = 0
    blindagem.removeAttribute("disabled", "disabled")
    municao.removeAttribute("disabled", "disabled")
})
tipoNormal.addEventListener('click', e => {
    nome.value = ""
    portas.value = 0
    blindagem.value = 0
    municao.value = 0
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")
})
const gerenciarExibicaco = () =>{
    carros.innerHTML = ""
    veiculos.map(e => {
        const div_carro = document.createElement("div")
        const btn_remover = document.createElement("button")
        btn_remover.addEventListener('click', e => {
            const carroRemovido = e.target.parentNode.dataset.nome
            removerCarros(carroRemovido)
            gerenciarExibicaco()
        })
        div_carro.setAttribute("class", "carro")
        div_carro.setAttribute("data-nome", e.nome)
        div_carro.innerHTML = `Nome: ${e.nome}<br>`
        div_carro.innerHTML += `Tipo: ${e.tipo}<br>`
        div_carro.innerHTML += `Quantidade de portas: ${e.portas}`
        btn_remover.innerHTML = "Remover"
        carros.appendChild(div_carro)
        div_carro.appendChild(btn_remover)
    })
}
adicionarCarro.addEventListener('click', e => {
    if(tipoNormal.checked){
        const carro = new Carro(nome.value, portas.value)
        veiculos.push(carro)
    }else{
        const carro = new CarroMilitar(nome.value, portas.value, blindagem.value, municao.value)
        veiculos.push(carro)
    }
    gerenciarExibicaco()
})
class Carro{//Classe Pai
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
        this.tipo = "Normal"
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}
class CarroMilitar extends Carro{//Classe Filha
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
        this.tipo = "Militar"
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}