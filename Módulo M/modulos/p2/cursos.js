const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduíno', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

/* const getTodosCursos = () =>{
    return cursos
} */

//ao usar export default, posso usar direto no function
export default function getTodosCursos() {
        return cursos
}

//não se pode utilizar 2 export default
/*export default*/ function getCurso(indice){
    return cursos[indice]
}

export {cursos, getCurso}
//export default getTodosCursos // Quando exportato por padrão (default), na importação não se deve usar chaves