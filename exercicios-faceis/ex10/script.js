function total() {
    let qtdMaca = Number(document.getElementById("maca").value)
    let qtdMorango = Number(document.getElementById("morango").value)
    let qtdTotal = qtdMaca + qtdMorango
    let precoMaca = 0
    let precoMorango = 0
    let precoTotal = 0

    if(qtdMaca > 5){
        precoMaca = 1.5 * qtdMaca
    }else{
        precoMaca = 1.8 * qtdMaca
    }

    if(qtdMorango > 5){
        precoMorango = 2.2 * qtdMorango
    }else{
        precoMorango = 2.5 * qtdMorango
    }

    precoTotal = precoMorango + precoMaca
    let precoTotal_formatado = precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    alert(precoTotal_formatado)
}