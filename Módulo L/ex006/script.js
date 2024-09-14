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
    const somaSalario = pessoas.reduce((prev, now) => Number(prev) + Number(now.salario), 0)
    alert(somaSalario)
})