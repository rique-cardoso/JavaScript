//FUNÇÃO MAP
//Percorre Arrays/Coleções

/*

const cursos = ['HTML', 'CSS', 'JavaScript', 'Git e GitHub', 'Tailwind', 'React', 'NextJS']

cursos.map((el, i) => {
    console.log(`Curso ${el} - Posição ${i}`)
})

*/

/*
    Outra declaração possível:

    const c = cursos.map((el, i) => {
        return el    
    })

    console.log(el)
*/

// ======================================================================

/*

let el = document.getElementsByTagName("div")
el = [...el]

el.map((e, i) => {
    console.log(e.innerHTML)
})

*/

// =======================================================================

/*

let el = document.getElementsByTagName("div")
let valores = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
console.log(valores)

*/

// =======================================================================

const converterInt = e => parseInt(e)
const dobrar = e => e << 1

let elementos = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(elementos)