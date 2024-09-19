const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"]

cursos.map((elem, index) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${index}`)//coloca um novo atributo a um elemento, basta passar qual o novo atributo que será atribuído e qual o valor que irá receber
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = elem

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "icon-lixeira.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.appendChild(btn_lixeira)

    btn_lixeira.addEventListener('click', (evnt) => {
        caixa1.removeChild(evnt.target.parentNode)
    })

    caixa1.appendChild(novoElemento)
})

//REMOVENDO ELEMENTO DO DOM

