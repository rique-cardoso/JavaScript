class Cursos{
    static cursos = ["JavaScript", "HTML", "CSS", "Arduíno", "Rapberry", "C++", "Python", "Java", "C#"]
    constructor(){}
    static getTodosCursos = () => {
        return this.cursos
    }
    static getCurso = (indice) => {
        return this.cursos[indice]
    }
    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }
    static apagarCurso = () => {
        this.cursos = []
    }
}
export default Cursos