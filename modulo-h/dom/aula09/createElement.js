const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"]

cursos.map((elem, index) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${index}`)//coloca um novo atributo a um elemento, basta passar qual o novo atributo que será atribuído e qual o valor que irá receber
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = elem

    caixa1.appendChild(novoElemento)
})


const novoElemento = document.createElement("div")
novoElemento.setAttribute("id", "c7")//coloca um novo atributo a um elemento, basta passar qual o novo atributo que será atribuído e qual o valor que irá receber
novoElemento.setAttribute("class", "curso c1")
novoElemento.innerHTML = "React Native"


caixa1.appendChild(novoElemento)
