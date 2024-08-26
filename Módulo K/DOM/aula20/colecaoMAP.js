//const caixa = document.querySelector("#caixa")

//método MAP e coleção MAP SÃO DIFERENTES

let mapa = new Map()

/*métodos e propriedades da classe Map: 
    .clear => para limpar a minha coleção
    .delete => remover um elemento da minha coleção
    .entries => entradas da coleção
    .forEach => percorrer a coleção
    .get() => obter um elemento da coleção
    .has() => verifica se existe um determinado elemento na minha coleção
    .keys => obtém as chaves da minha seleção
    .set() => permite adicionar um elemento na minha coleção
    .size => tamanho da minha coleção
    .value => obtém os valores
*/

//Posso ter valores iguais, só não posso ter chaves iguais. Se uma chave já existir, ela irá substituir aquele valor dentro da coleção.
mapa.set("curso", "JavaScript") //chave, valor
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("Canal", 100)

console.log(mapa) //Map(4) {size: 4, curso => JavaScript, 10 => CFB Cursos, 1 => 100, Canal => 100}
console.log(mapa.get("curso"))//JavaScript
console.log(mapa.has("Canal"))//true
console.log(mapa.has("canal"))//false => repare que a primeira letra está minúscula
console.log(mapa.size)//4
mapa.forEach(elemento => console.log(elemento))
console.log(mapa.get(1)) //elemento existe então será mostrado
mapa.delete(1) //deleta o elemento com a chave 1
console.log(mapa.get(1)) //elemento não existe mais, pois foi deletado na linha anterior, logo não será mostrado
mapa.clear()
console.log(mapa) //mapa não contem mais nenhum elemento pois foi limpado