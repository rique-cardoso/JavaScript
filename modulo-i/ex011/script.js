let numeros = []
const registrar = document.querySelector('#registrar')
const encerrar = document.querySelector('#encerrar')
const array = document.querySelector('#array')
const resultado = document.querySelector("#resultado")
registrar.addEventListener('click', e => {
    const numero = document.querySelector("#numero")
    numeros.push(numero.value)
    array.innerHTML += `${numero.value} `
})
encerrar.addEventListener('click', e => {
    const pares = numeros.filter(e => e % 2 == 0)
    pares.map(e => resultado.innerHTML += `${e} `)
})