function calcular() {
    let preco = Number(document.getElementById("preco").value)
    let qtd = Number(document.getElementById("qtd").value)
    let desconto = 0
    let precoTotal = qtd * preco

    if(qtd <= 5){
        desconto = precoTotal * (2 / 100)
    }else if(qtd > 5 && qtd <= 10){
        desconto = precoTotal * (3 / 100)
    }else{
        desconto = precoTotal * (5 / 100)
    }

    precoTotal = precoTotal - desconto
    
    alert(precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
}