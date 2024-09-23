const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaResultado = document.querySelector('.res')
const display = document.querySelector('#display')
const off = document.querySelector('#toff')
const clean = document.querySelector('#tlimpar')
teclasNum.map(e => {
    e.addEventListener('click', event => {
        display.innerHTML += event.target.innerHTML
    })
})
teclasOp.map(e => {
    e.addEventListener('click', event => {
        display.innerHTML += event.target.innerHTML
    })
})
clean.addEventListener('click', e => {
    display.innerHTML = "0"
})