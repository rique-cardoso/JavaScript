function calcular() {
    let salario_atual = Number(document.getElementById("salario").value)
    let aumento = Number(document.getElementById("aumento").value)
    let novo_salario = salario_atual + ((salario_atual * aumento)/100)
    let novo_salario_formatado = novo_salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let resposta = document.getElementById("resposta")

    resposta.innerHTML = `Novo salário: ${novo_salario_formatado}`
}