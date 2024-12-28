const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaResultado = document.querySelector('.res')
const display = document.querySelector('#display')
const cpy = document.querySelector('#tcpy')
const clean = document.querySelector('#tlimpar')
const igual = document.querySelector('#tigual')
const aba = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')
// const teste = document.querySelector('#teste')
let sinal = false
let decimal = false
teclasNum.map(e => {
    e.addEventListener('click', event => {
        sinal = false
        if(event.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += event.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += event.target.innerHTML
        }
    })
})
teclasOp.map(e => {
    e.addEventListener('click', event => {
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(event.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += event.target.innerHTML
            }
        }
    })
})
clean.addEventListener('click', e => {
    display.innerHTML = "0"
    decimal = false
})
igual.addEventListener('click', e => {
    sinal = false
    decimal = false
    const resultado = eval(display.innerHTML)
    display.innerHTML = resultado
})
cpy.addEventListener('click', e => {
    navigator.clipboard.writeText(display.innerHTML)
    /* teste.select()
    teste.setSelectionRange(0, 999)
    navigator.clipboard.writeText(teste.value) */
})
aba.addEventListener('click', e => {
    calc.classList.toggle('calc--exibir')
    if(calc.classList.contains('calc--exibir')){
        aba.textContent = "<"
    }else{
        aba.textContent = ">"
    }
})