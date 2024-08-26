//FUNÇÕES GERADORAS
//Que tem o seu retorno adiado, até que precisamos dele. É o pilar da programação assíncrona em JS.
//Têm um asterísco depois da palavra reservada 'function' | exp: function * funcao () {}

function* cores(){
    yield 'Vermelho'
    yield 'Azul'
    yield 'Amarelo'
}

let iterador = cores()

console.log(iterador.next().value)
console.log(iterador.next().value)
console.log(iterador.next().value)
// console.log(iterador.next().value) --> Se eu chamar novamente, terei a saída Undefined, pois não tem mais nada a ser executado na função.

//caso eu queira executar de novo, preciso atribuir a função novamente à variável
iterador = cores()

console.log(iterador.next().value)

//======================================================

function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Seu esporte favorito: '
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const iterador1 = perguntas()

console.log(iterador1.next().value)
console.log(iterador1.next('Bruno').value)
console.log(iterador1.next('Futebol').value)

//======================================================


function* contador(){
    let i = 0
    while(true){
        yield i++ //i começa em 0 por ter pós-incremento, para começar em 1 é só usar um pré-incremento
        if(i > 255){
            break;
        }
    }
}

const iterador2 = contador()

for (const iterator of iterador2) {
    console.log(iterator)
}