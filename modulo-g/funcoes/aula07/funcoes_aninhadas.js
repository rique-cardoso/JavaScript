//FUNÇÕES ANINHADAS
//É conceito de funções dentro de funções.

const soma = (...valores) => {
    const somar = valor => {
        let res = 0
        for (const iterator of valor) {
            res += iterator
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10, 15, 20, 30))