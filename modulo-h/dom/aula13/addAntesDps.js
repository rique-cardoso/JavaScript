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

const criarNovoCurso = (curso, chave=varChave) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    if(chave == varChave){
        varChave++
    }
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el, chave)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]

    let radioSelecionado = todosRadios.filter((ele, index, array) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCrusoSelecionado.addEventListener('click', (event) => {

    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent

    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } catch (error) {
        alert("Selecione um curso.")
    }
})

btnRemoverCurso.addEventListener('click', (event) => {
    const rs = radioSelecionado()
    
    if(rs !== undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }
})

btnAntes.addEventListener('click', (event) => {
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        }
    } catch (error) {
        alert("Selecione um curso.")
    }
})

btnDepois.addEventListener('click', (event) => {
    const rs = radioSelecionado()
    try {
        if(nomeCurso.value != ""){
            const cursoDpsSelecionado = rs.parentNode.parentNode.nextSibling
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoDpsSelecionado)
        }
    } catch (error) {
        alert("Selecione um curso.")
    }
})