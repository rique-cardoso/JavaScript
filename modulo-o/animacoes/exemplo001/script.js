const carro = document.querySelector('#carro')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')

const init = () => {
    carro.style = "position:relative;left:0px"
}
btn_esquerda.addEventListener('click', e => {
    carro.style.left = parseInt(carro.style.left) - 10 + "px"
})
btn_direita.addEventListener('click', e => {
    let posicao = parseInt(carro.style.left)
    posicao += 10
    carro.style = `position:relative;left:${posicao}px`
})
window.addEventListener("load", init())