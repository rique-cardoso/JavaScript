//querySelector() e querySelectorAll()

/* const query_divTodas = document.querySelector("div") //de todos os elementos que são Div, ele retorna o primeiro que ele encontrar */

const query_divTodas = [...document.querySelectorAll("div[class]")]//retorna uma nodeList que é basicamente a mesma coisa que HTMLCollection - usando o spread, conseguimos convertê-lo em um array - retorna todos os elementos que forem uma tag 'div' - consigo pegar mais de uma tag do HTML ao mesmo tempo. - consigo pegar apenas as divs que contém o atributo class

const elementosPDentroDeElementosDiv = [...document.querySelectorAll("div > p")] //apenas os elementos divs que tem elementos p dentro dela

const query_cursosTodos = [...document.querySelectorAll(".curso")] //retorna todos os elementos que estiverem com a class 'curso'
const query_cursosC1 = [...document.querySelectorAll(".c1, p")] //retorna todos os elementos que estiverem com a class 'curso' - consigo retornar classes e tags usando  o mesmo método seletor
const query_cursosC2 = [...document.querySelectorAll(".c2")] //retorna todos os elementos que estiverem com a class 'curso'

const query_cursoEspecial = document.querySelector("#c1")// retorna o elemento com o id 'c1' - poderia utilizar também o querySelectorAll

console.log(query_divTodas)
console.log(query_cursosTodos)
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(query_cursoEspecial)
