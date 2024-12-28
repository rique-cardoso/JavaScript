function contar() {
    let inicio = Number(window.document.getElementById("inicio").value)
    let fim = Number(window.document.getElementById("fim").value)
    let passo = Number(window.document.getElementById("passo").value)
    let res = window.document.getElementById("res")

    if(inicio == fim || passo <= 0){
        res.innerHTML = "Impossível contar"
    }else{
        res.innerHTML = `Contando: <br>`
        if(inicio < fim){
            for(let i = inicio; i <= fim; i += passo){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }else if(inicio > fim){
            for(let i = inicio; i >= fim; i -= passo){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}