const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')
const btn_rodar = document.querySelector('#btn_rodar')
/* const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita') */

const init = () => {
    carro.style = "position:relative;left:0px;width:100px;height:40px"
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
    /* tamMax = window.innerWidth - parseInt(carro.style.width) */
}

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0
const mover = () => {
    if(parseInt(carro.style.left) >= tamMax){
        dir = -1
    }else if(parseInt(carro.style.left) <= 0){
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
    anima = setTimeout(mover, 20)
}
btn_parar.addEventListener('click', e => {
    clearTimeout(anima)
})
btn_rodar.addEventListener('click', () => {
    mover()
})
/* btn_esquerda.addEventListener('click', e => {
    clearTimeout(anima)
    mover(-1)
})
btn_direita.addEventListener('click', e => {
    clearTimeout(anima)
    mover(1)
}) */

window.addEventListener('load', init())
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})
window.addEventListener('keydown', e => {
    if(e.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if(e.code === "ArrowDown"){
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamCarro
})

/* window.addEventListener("load", init())
window.addEventListener("resize", () => {
    window.innerWidth - parseInt(carro.style.width) 
}) */