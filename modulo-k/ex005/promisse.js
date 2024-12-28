//Quando é preciso executar uma promisse quando eu quiser ao invés de ser em tempo de execução, adicionamos ela a uma função
const numero = document.getElementById('numero')
const botao_promessa = document.querySelector('#btn_promessa')
botao_promessa.addEventListener('click', e => {
    numero.innerHTML = "Processando..."
    promessa()
        .then((retorno) => {
            numero.textContent = retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        })
        .catch((retorno) => {
            numero.textContent = retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
        })
})
const promessa = () => {
    let promessa = new Promise((resolve, reject) => {
        let resultado = false
        let tempo = 3000
        setTimeout(() => {
            //resultado = true
            if (resultado) {
                resolve("Deu tudo certo")
            } else {
                reject("Deu tudo errado")
            }
        }, tempo)
        return promessa
    })
    /* promessa.then((retorno) => {
        numero.textContent = retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })
    promessa.catch((retorno) => {
        numero.textContent = retorno
        numero.classList.add('erro')
        numero.classList.remove('ok')
    }) */
}
numero.textContent = "Esperando..."