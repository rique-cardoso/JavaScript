const pessoas = []
const registrar = document.querySelector("#registrar")
const encerrar = document.querySelector("#encerrar")

function limparCampos(nome, salario, numeroFilhos) {
    nome.value = ""
    salario.value = ""
    numeroFilhos.value = ""
}

registrar.addEventListener('click', e => {
    const nome = document.querySelector("#nome")
    const salario = document.querySelector("#salario")
    const numeroFilhos = document.querySelector("#nmrFilhos")
    const pessoa = {
        nome: nome.value,
        salario: salario.value,
        numeroFilhos: numeroFilhos.value
    }
    pessoas.push(pessoa)
    limparCampos(nome, salario, numeroFilhos)
})

encerrar.addEventListener('click', e => {
    e.preventDefault()
    const somaSalario = pessoas.reduce((prev, now) => Number(prev) + Number(now.salario), 0)
    const somaFilhos = pessoas.reduce((prev, now) => Number(prev) + Number(now.numeroFilhos), 0)
    const maiorSalario = Math.max(...pessoas.map(elem => Number(elem.salario)))
    const menor150 = pessoas.filter(e => Number(e.salario) < 150)
    for (const elemento of menor150) {
        console.log(elemento.salario)
    }
})