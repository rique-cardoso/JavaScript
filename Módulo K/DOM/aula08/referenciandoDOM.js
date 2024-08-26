const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.children[caixa1.children.length - 1])//is array - pegando o último elemento do array

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)

//Verificando se caixa1 possui um filho ou não

console.log(caixa1.hasChildNodes) //retorno booleano, true se tiver filhos e false se não tiver filho

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

//Operando estes elementos

console.log(caixa1.firstElementChild.innerHTML = "TESTE")
console.log(caixa1.children[1].innerHTML = "TESTE 2")
console.log(caixa1.children[3].innerHTML = caixa1.lastElementChild.innerHTML)
console.log(btn_c[0].parentElement.parentElement)//avô