//getElementsByClassName
//assim como getElementsByTagName, retorna um HTML Collections

const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("cruso")[0] //quero pegar apenas o retorno da primeira posição do HTML Collection com a class 'curso'

cursosC2.map(el => {
    el.classList.add("destaque") //adicionando uma classe aos elementos
})
