const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]

p_array.innerHTML = elementos_array

btnReduzir.addEventListener('click', event => {
    resultado.innerHTML = elementos_array.reduce((previousValue, nextValue) => previousValue + nextValue, 0)
})