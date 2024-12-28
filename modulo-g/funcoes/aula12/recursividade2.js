//FUNÇÃO RECURSIVA PARTE 2

/* function contagemRegressiva(contador) {
    if(contador <= 0){
        return console.log("Feliz Ano Novo!")
    }
    console.log(contador)
    return contagemRegressiva(contador - 1)
}

contagemRegressiva(10) */

function contagemRegressiva(contador) {
    if(contador <= 0){
        return console.log("Feliz Ano Novo!")
    }
    console.log(contador)
    setTimeout(()=>{
        contagemRegressiva(contador - 1)
    }, 1000)
}

contagemRegressiva(10)



/*Fatorial*/

/* function fatorial(n){
    if(n === 1){
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(5
)) */