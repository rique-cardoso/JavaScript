//ARROW FUNCTION OU FUNÇÕES LAMBDAS

//Padrão funções anônimas: const soma = function(v1, v2,){return v1+v2}

//Ao invés de function, usa-se seta

const soma = (...valores) => {
    let res = 0
    for (const iterator of valores) {
        res += iterator
    }
    return res
}

console.log(soma(1, 2, 3, 4, 5))

//Se tiver apenas um parâmetro, não preciso dos parenteses

const nome = n => {return n}

console.log(nome("Henrique"))

//Com as Arrow Functions, não é "necessário" um retorno, isso, claro, se for uma operação simples

const n = n => n + 10

console.log(n(10))

/*
    RESUMO:
        .Apenas um parâmetro de entrada, não preciso dos parenteses
        .Se for uma operação simples, não preciso do return e não preciso das chaves
        .Operação mais complexa, preciso das chaves e do return
 */