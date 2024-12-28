const numeros = []
const registrar = document.querySelector("#registrar")
const encerrar = document.querySelector("#encerrar")
const paragrafo_array = document.querySelector("#array")
const resultado = document.querySelector("#resultado")
function limparCampo(numero) {
    numero.value = ""
}
function verificaRepeticoes(array) {
    const set = new Set()
    const duplicatas = []
    array.map((elem, indice) => {
        if(set.has(elem)){
            duplicatas.push({elem, indice})
        }else{
            set.add(elem)
        }
    })
    return duplicatas
}
registrar.addEventListener('click', e => {
    const numero = document.querySelector("#numero")
    if(numero.value == ""){
        alert("Por favor, preencha todos os campos para registrar um número.")
    }else{
        numeros.push(Number(numero.value))
        paragrafo_array.innerHTML += ` ${numero.value}`
        limparCampo(numero)
    }
})
encerrar.addEventListener('click', e => {
    if(numeros.length > 0){
        const posicoesRepetidas = verificaRepeticoes(numeros)
        posicoesRepetidas.map(e => resultado.innerHTML += `<br>${e.elem} no índice ${e.indice}`)
    }else{
        alert("Não há ninguém cadastrado ainda, por favor, realize um cadastro para consultar as informações")
    }
})