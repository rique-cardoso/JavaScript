function verificadorIdade() {
    let data = document.getElementById("dataNasc").value
    let anoNasc = new Date(data).getFullYear()
    let anoAtual = new Date().getFullYear()
    let resposta = document.getElementById("resposta")
    let idade = anoAtual - anoNasc
    
    if(idade >= 16){
        resposta.innerHTML = `Você pode votar!`
    }else{
        resposta.innerHTML = `Você não pode votar!`
    }
}