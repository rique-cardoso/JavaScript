//FUNÇÕES COM RETORNO   

function nome() {
    return "Henrique Prates Cardoso"
}

console.log(nome())

function soma2_10() {
    let n1 = 2
    let n2 = 10
    let res = n1 + n2
    if(res % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}

let num = soma2_10()

console.log(num)

//console.log(soma2_10())

// Assim que uma função chega em return, ela termina.