const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 20, 61, 18, 22]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', event => {
    const maiores18 = elementos_array.every(e => e >= 18)
    if(maiores18){
        resultado.innerHTML = "Todos são maiores de 18 anos"
    }else{
        resultado.innerHTML = "Nem todos são maiores de 18 anos"
    }
})