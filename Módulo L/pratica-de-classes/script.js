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
    constructor(){
        this.tamanho = Math.floor(Math.random() * 15) + 10
        this.cor_red = Math.floor(Math.random() * 255)
        this.cor_green = Math.floor(Math.random() * 255)
        this.cor_blue = Math.floor(Math.random() * 255)
        this.posicao_x = Math.floor(Math.random() * (larguraPalco - this.tamanho))
        this.posicao_y = Math.floor(Math.random() * alturaPalco)
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