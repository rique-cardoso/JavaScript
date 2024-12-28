function valorVenda() {
    let valorFabrica = Number(document.getElementById("valorFabrica").value)
    let valorFinal = valorFabrica + (valorFabrica * (73 / 100))
    let valorFinal_formatado = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    let resposta = document.getElementById("resposta")

    resposta.innerHTML = `Valor final: ${valorFinal_formatado}`
}