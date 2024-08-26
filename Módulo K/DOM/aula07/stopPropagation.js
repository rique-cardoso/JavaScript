const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener('click', () => {
    console.log("Clicou")
 })

cursos.map(elem => {
    elem.addEventListener('click', evnt => {
        evnt.stopPropagation()
    })
})