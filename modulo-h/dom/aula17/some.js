const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 20, 16, 18, 22]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', event => {
    const maiores18 = elementos_array.some((e) => e >= 18)
    if(maiores18){
        resultado.innerHTML = 'OK.'
    }else{
        resultado.innerHTML = 'Nenhum dos elementos do array está em conformidade.'
    }
})