//IIFE (Self Invoked Function)
/* 
    É um tipo de função com dois grandes princípios, (1) está isolada em um par de parenteses para que não polua o restante do código e tenha um escopo bem definido; (2) tem dois parênteses que podem ficar imdediatamente após a fechada de chaves e em seguida a fechada do bloco de código "}())" ou podem ficar após a fechada do bloco de código "})()", que serve para imediatamente após a criação da função já invocá-la.

    SINTAXE: 

    (
        function(parameters){
            //código
        }
    )() // => aqui dentro eu posso passar parâmetros para a chamada da função

    ou 

    (
        function(parameters){
            //código
        }
        ()
    )
*/

(function(n1, n2){
    this.n1 = n1
    this.n2 = n2
    return console.log(this.n1 + this.n2)
})(10, 15); //Caso eu não utilize ponto e vírgula neste caso, o parser do javascript, ao chegar no primeiro parêntese da linha 29 ao invés de entender que outra IIFE está sendo criada, ele vai entender que está sendo chamada novamente a mesma IIFE, porém isso não é permitido e vai ser aprsentado o erro de "is not a function" 

//MAIS INFORMAÇÕES SOBRE IIFES EM -> https://chatgpt.com/share/101e77a6-3633-4a33-82a9-6e598b723018

(
    () => {
        console.log("Também funciona com Arrow Functions!")
    }
)();

//Uma questão interessante é que as IIFE's só podem ser executadas uma única vez no momento de suas chamadas, uma forma de contornar isso é encapsular a lógica da seguinte forma:

const iife_encapsualda = (
    function(){
        return function(){
            console.log("Lógica encapsulada")
        }
    }
)()

iife_encapsualda();

//Para manter o conceito de IIFE e executar mais de uma vez, seria necessário criar a mesma IIFE mais de uma vez, que é o mesmo que criar várias IIFE

(
    //IIFE para somar dois números - Primeira execução
    function(n1, n2){
        console.log(n1 + n2)
    }
)(20, 25);

(
    //IIFe para somar dois números - segunda execução
    function(n1, n2){
        console.log(n1 + n2)
    }
)(30, 35);

//Na prática, é como se eu estivesse criando várias IIFEs