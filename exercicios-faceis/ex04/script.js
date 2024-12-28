function verificaMultiplo() {
    let num = Number(document.getElementById("valor").value)
    let resposta = document.getElementById("resposta")
    if(num % 5 == 0){
        resposta.innerHTML = `É múltiplo de 5.`
    }else{
        resposta.innerHTML = `Não é múltiplo de 5.`
    }
}