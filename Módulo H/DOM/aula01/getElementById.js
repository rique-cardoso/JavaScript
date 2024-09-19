//MÉTODO getElementById()

const div_c1 = document.getElementById("c1") //apontando o elemento html de id #c1 para a minha variável div_c1
const div_c2 = document.getElementById("c2")
const div_c3 = document.getElementById("c3")
const div_c4 = document.getElementById("c4")
const div_c5 = document.getElementById("c5")
const div_c6 = document.getElementById("c6")

//Manipulando elementos, acessando suas propriedades

console.log(div_c1) //apresentando na tela a minha variável div_c1
console.log(div_c1.id) //apresentando na tela o id da minha div_c1
console.log(div_c1.innerHTML) //apresentando na tela o conteúdo HTML da minha div_c1

//Alterando elementos

console.log(div_c1.innerHTML = "HENRIQUE")

//Manipulando elementos dentro de um array

const arrayElementos = [div_c1.innerHTML, div_c2.innerHTML, div_c3.id, div_c4.id, div_c5, div_c6]

console.log(arrayElementos)