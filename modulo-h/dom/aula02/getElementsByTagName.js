//MÉTODO getElementsByTagName()

let colecaoHTML = document.getElementsByTagName("div")

//-> principal diferença: retorna um HTMLCollections que embora o conceito seja parecido com um Array, não é possível utilizar os métodos de um array.

// "Convertendo" um HTMLCollection para um Array utilizando o operador Spread 

let arrayColecao = [...colecaoHTML]

// console.log(arrayColecao) //Prototype: Array

// "Conversão" com código reduzido

const arrayColecaoComprimido = [...document.getElementsByTagName("div")]
console.log(arrayColecaoComprimido) //Prototype: Array

arrayColecaoComprimido.map(e => console.log(e.innerHTML = "HENRIQUE")) //Agora, como um Array consigo utilizar as funções de Array
