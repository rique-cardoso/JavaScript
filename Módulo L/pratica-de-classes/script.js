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

//função para atualização dos valores de largura e altura da tela quando esta for redimensionada
window.addEventListener('resize', e => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetWidth
})

btn_add.addEventListener('click', e => {

})

btn_remover.addEventListener('click', e => {
    
})