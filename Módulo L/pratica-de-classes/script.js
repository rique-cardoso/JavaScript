//Pegando os objetos do DOM
const palco = document.querySelector('#palco')
const num_objetos = document.querySelector('#num_objetos')
const txt_qtde = document.querySelector('#txt_qtde')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')

let larguraPalco = palco.offsetWidth //pega a largura total do objeto palco
let alturaPalco = palco.offsetHeight //pega a altura total do objeto palco
let bolas = []
let numBolas = 0

class Bola{
    constructor(arrayBolas, palco){
        this.tamanho = Math.floor(Math.random() * 15) + 10 //calculado para que seja aleatório entre 10 e 25
        this.cor_red = Math.floor(Math.random() * 255) //num aleatório para o rede (R,g,b)
        this.cor_green = Math.floor(Math.random() * 255) //num aleatório para o green (r,G,b)
        this.cor_blue = Math.floor(Math.random() * 255) //num aleatório para o blue (r,g,B)
        this.posicao_x = Math.floor(Math.random() * (larguraPalco - this.tamanho))
        this.posicao_y = Math.floor(Math.random() * alturaPalco - this.tamanho)
        this.velocidade_x = Math.floor(Math.random() * 2) + 0.5 //calculado para que seja aleatório entre 0.5 e 2.5
        this.velocidade_y = Math.floor(Math.random() * 2) + 0.5
        this.direcao_x = (Math.random() * 10) > 5 ? 1 : -1
        this.direcao_y = (Math.random() * 10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBolas++
        num_objetos.innerHTML = numBolas
    }
    minhaPosicao = () => {
        return this.arrayBolas.indexOf(this)
    }
    remover = () => {
        clearInterval(this.controle)
        bolas = bolas.filter(bola => {
            if(bola.id!=this.id){
                return bola
            }
        })
        this.eu.remove()
        numBolas--
        num_objetos.innerHTML = numBolas
    }
    desenhar = () => {
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left: ${this.posicao_x}px; top: ${this.posicao_y}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.cor_red}, ${this.cor_green}, ${this.cor_blue})`)
        this.palco.appendChild(div)
    }
    colisaoBordas = () => {
        if(this.posicao_x + this.tamanho >= larguraPalco){
            this.direcao_x = -1
        }else if(this.posicao_x <= 0){
            this.direcao_x = 1
        }
        if(this.posicao_y + this.tamanho >= alturaPalco){
            this.direcao_y = -1
        }else if(this.posicao_y <= 0){
            this.direcao_y = 1
        }
    }
    controlar = () => {
        this.colisaoBordas()
        this.posicao_x += this.direcao_x * this.velocidade_x
        this.posicao_y += this.direcao_y * this.velocidade_y
        this.eu.setAttribute('style', `left: ${this.posicao_x}px; top: ${this.posicao_y}px; width: ${this.tamanho}px; height: ${this.tamanho}px; background-color: rgb(${this.cor_red}, ${this.cor_green}, ${this.cor_blue})`)
        if(this.posicao_x > larguraPalco || this.posicao_y > alturaPalco){
            this.remover()
        }
    }
}

//função para atualização dos valores de largura e altura da tela quando esta for redimensionada
window.addEventListener('resize', e => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetWidth
})


btn_add.addEventListener('click', e => {
    const qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++){
        //Instanciar novas bolinhas
        bolas.push(new Bola(bolas, palco))
    }
})

btn_remover.addEventListener('click', e => {
    bolas.map(bola => {
        //Remover bolas
        bola.remover()
    })
})