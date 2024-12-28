function verificaEstoque() {
    let qtdAtual = Number(document.getElementById("qtdAtual").value)
    let qtdMinima = Number(document.getElementById("qtdMinima").value)
    let qtdMaxima = Number(document.getElementById("qtdMaxima").value)
    let qtdMedia = (qtdMinima + qtdMaxima) / 2
    let resposta = document.getElementById("resposta")

    if(qtdAtual >= qtdMedia){
        resposta.innerHTML = `Não efetuar compra`
    }else{
        resposta.innerHTML = `comprar pelo menos ${qtdMedia - qtdAtual}`
    }
    
}