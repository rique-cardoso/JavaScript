const pessoas = []
const registrar = document.querySelector("#registrar")
const encerrar = document.querySelector("#encerrar")
const resultado = document.querySelector("#resultado")
function limparCampos(nome, salario, numeroFilhos) {
    nome.value = ""
    salario.value = ""
    numeroFilhos.value = ""
}
function formatarNumero(num, casasDecimais = 2) {
    return Number(num).toFixed(casasDecimais).replace('.', ',')
}
registrar.addEventListener('click', e => {
    const nome = document.querySelector("#nome")
    const salario = document.querySelector("#salario")
    const numeroFilhos = document.querySelector("#nmrFilhos")
    if(nome.value == "" || salario.value == "" || numeroFilhos.value == ""){
        alert("Por favor, preencha todos os campos para registrar uma pessoa.")
    }else{
        const pessoa = {
            nome: nome.value,
            salario: salario.value,
            numeroFilhos: numeroFilhos.value
        }
        pessoas.push(pessoa)
        limparCampos(nome, salario, numeroFilhos)
    }
})

encerrar.addEventListener('click', e => {
    if(pessoas.length > 0){
        const somaSalario = pessoas.reduce((prev, now) => Number(prev) + Number(now.salario), 0)
        const mediaSalario = somaSalario / pessoas.length
        const somaFilhos = pessoas.reduce((prev, now) => Number(prev) + Number(now.numeroFilhos), 0)
        const mediaFilhos = somaFilhos / pessoas.length
        const maiorSalario = Math.max(...pessoas.map(elem => Number(elem.salario)))
        const menor150 = pessoas.filter(e => Number(e.salario) < 150)
        const percentual_menor150 = (100 * menor150.length) / pessoas.length
        resultado.innerHTML = `
            Média salarial da população: R$ ${formatarNumero(mediaSalario)}<br>
            Média de filhos da população: ${formatarNumero(mediaFilhos, 1)}<br>
            Maior salário da população: R$ ${formatarNumero(maiorSalario)}<br>
            Percentual de pessoas em extrema pobreza: ${formatarNumero(percentual_menor150)}%`
    }else{
        alert("Não há ninguém cadastrado ainda, por favor, realize um cadastro para consultar as informações")
    }
})