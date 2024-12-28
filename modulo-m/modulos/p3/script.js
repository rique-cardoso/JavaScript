/* // import getTodosCursos, {cursos} from './cursos.js'
import getTodosCursos from "./cursos.js"
import {cursos as c, getCurso as gc} from "./cursos.js"
console.log(c)
console.log(getTodosCursos())
console.log(gc(2)) */
import * as cursos from './cursos.js'
console.log(cursos.cursos)
console.log(cursos.default())
console.log(cursos.getCurso(3))