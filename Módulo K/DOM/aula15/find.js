const p_array = document.querySelector("#array")
const palavra_pesquisada = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const p_resultado = document.querySelector("#resultado")

const elementos_array = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener('click', event => {
    const encontrado = elementos_array.find( e => e === Number(palavra_pesquisada.value))
    if(encontrado === undefined){
        p_resultado.innerHTML = "Objeto não encontrado"
    }else{
        p_resultado.innerHTML = `Objeto "${encontrado}" foi encontrado`
    }
})