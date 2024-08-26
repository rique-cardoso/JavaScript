const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_mover")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionado") //toggle, confere se tem a classe selecionada, se tem, é romovida, senão é adicionada
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)//appendChild, anexa um filho ao elemento em questão
    })
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})
