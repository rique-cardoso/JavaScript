const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaResultado = document.querySelector('.res')
const display = document.querySelector('#display')
const off = document.querySelector('#toff')
const clean = document.querySelector('#tlimpar')
const igual = document.querySelector('#tigual')
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