btnIdentificar.addEventListener('click', e => {
    const caractere = [document.getElementById("caractere").value.toLowerCase()]
    const btnIdentificar = document.querySelector("#btnIdentificar")
    let resultado = document.querySelector("#resultado")
    if(/[a-z]/.test(caractere)){
        if("aeiou".includes(caractere)){
            resultado.innerHTML = "É uma vogal"
        }else{
            resultado.innerHTML = "É uma consoante"
        }
    }else{
        alert("Digite uma letra.")
    }
})