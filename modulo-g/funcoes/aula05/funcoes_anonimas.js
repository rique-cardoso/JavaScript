//FUNÇÕES ANÔNIMAS

//Funções anônimas: não possui um nome associada ao seu corpo, chamadas em tempo de execução.
//Por falta de nome, associo a função a uma variável

const variavel = function(...valores){
    let soma = 0
    for (const iterator of valores) {
        soma += iterator
    }
    return soma
}

console.log(variavel(10, 5, 20, 350, 13,341))

const t = function(v1, v2){return v1 + v2}
console.log(t(10,7))


//Função anônima construtor

const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3") //Último parâmetro é o corpo da função

console.log(f(10, 15, 5))