const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "React Native"]
const btnCrusoSelecionado = document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let varChave = cursos.length

const removerSelecao = () => {
    cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map(e => {
        e.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso, chave=varChave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    novoElemento.addEventListener('click', (event) => {
        removerSelecao()
        event.target.classList.toggle("selecionado")
    })

    if(chave == varChave){
        varChave++
    }
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el, chave)

    caixaCursos.appendChild(novoElemento)
})

const cursoSelecionado = () => {
    const todosRadios = [...document.querySelectorAll(".selecionado")]
    return todosRadios[0]
}

btnCrusoSelecionado.addEventListener('click', (event) => {

    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent

    try {
        alert(`Curso selecionado: ${cursoSelecionado().innerHTML}`)
    } catch (error) {
        alert("Selecione um curso.")
    }
})

btnRemoverCurso.addEventListener('click', (event) => {
    const cs = cursoSelecionado()
    if(cs !== undefined){
        cs.remove()
    }
})

btnAntes.addEventListener('click', (event) => {
    const cs = cursoSelecionado()
    try {
        if(nomeCurso.value != ""){
            if(cs !== undefined){
                const novoCurso = criarNovoCurso(nomeCurso.value)
                caixaCursos.insertBefore(novoCurso, cs)
            }
        }
    } catch (error) {
        alert("Selecione um curso.")
    }
})

btnDepois.addEventListener('click', (event) => {
    const cs = cursoSelecionado()
    try {
        if(nomeCurso.value != ""){
            if(cs !== undefined){
                const novoCurso = criarNovoCurso(nomeCurso.value)
                const dpsIrmaoNovoCurso = cs.nextSibling
                caixaCursos.insertBefore(novoCurso, dpsIrmaoNovoCurso)
            }
        }
    } catch (error) {
        alert("Selecione um curso.")
    }
})