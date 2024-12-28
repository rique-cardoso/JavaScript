function existeTriangulo(a, b, c) {
    if(a < b + c && b < a + c && c < a + b){
        return true
    }else{
        return false
    }
}

function convertePixels(x) {
    return x * 10
}

let inputC = document.querySelector('#ladoC')
inputC.addEventListener('blur', e => {
    let ladoA = Number(document.querySelector('#ladoA').value)
    let ladoB = Number(document.querySelector('#ladoB').value)
    let ladoC = Number(document.querySelector('#ladoC').value)
    let resultado = document.querySelector('#resultado')
    let triangulo = document.querySelector('.triangulo')
    if(existeTriangulo(ladoA, ladoB, ladoC)){
        triangulo.style.borderLeftWidth = `${50 + convertePixels(ladoA)}px`
        triangulo.style.borderRightWidth = `${50 + convertePixels(ladoB)}px`
        triangulo.style.borderBottomWidth = `${50 + (convertePixels(ladoC) * 2)}px`
        resultado.innerHTML = 'Isto é um triângulo'
    }else{
        triangulo.style.borderLeftWidth = '50px'
        triangulo.style.borderRightWidth = '50px'
        triangulo.style.borderBottomWidth = '100px'
        resultado.innerHTML = 'Isto não é um triângulo'
    }
})