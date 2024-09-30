const numero = document.getElementById('numero')
let promessa = new Promise((resolve, reject) => {
    let resultado = false
    let tempo = 3000
    setTimeout(() => {
        //resultado = true
        if(resultado){
            resolve("Deu tudo certo")
        }else{
            reject("Deu tudo errado")
        }
    }, tempo)
})
promessa.then((retorno) => {
    numero.textContent = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promessa.catch((retorno) => {
    numero.textContent = retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
})
numero.textContent = "Processando..."