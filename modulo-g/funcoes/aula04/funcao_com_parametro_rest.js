//Funções com Parâmetros REST

//Parâmetros REST: forma de passar parâmetros em minha função, sem que eu tenha que especificar a quantidade de parâmetros

function soma(...valores) {
    let soma = 0
    for (let index = 0; index < valores.length; index++) {
        soma += valores[index];
    }

    return soma
}

console.log(soma(10, 5, 15, 63))