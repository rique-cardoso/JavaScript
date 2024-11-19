//Pegando os objetos do DOM
const palco = document.querySelector('#palco')
const num_objetos = document.querySelector('#num_objetos')
const txt_qtde = document.querySelector('txt_qtde')
const btn_add = document.querySelector('btn_add')
const btn_remover = document.querySelector('btn_remover')

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
    }
    minhaPosicao = () => {

    }
    remover = () => {

    }
    desenhar = () => {

    }
    controlar = () => {

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
    }
})

btn_remover.addEventListener('click', e => {
    bolas.map(e => {
        //Remover bolas
    })
})