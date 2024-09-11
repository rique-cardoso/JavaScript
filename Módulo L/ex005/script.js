function converterBases() {
    const baseConvertida = document.querySelector("#convertido").value
    const baseConversora = document.querySelector("#conversor").value
    const baseConvertida_valor = [...document.querySelector("#valorConvertido").value]
    let resultado = document.querySelector("#resultado")
    if(baseConvertida != baseConversora){
        switch (baseConvertida) {
            case "bin":
                if(baseConvertida_valor.reverse().every(elem => elem <= 1 && elem >= 0)){
                    let decimal_correspondente = baseConvertida_valor.map((elem, indice) => {
                        return elem * (2 ** indice)
                    })
                    switch (baseConversora) {
                        case "oct":
                            
                            break;
                        case "dec":
                            let soma = decimal_correspondente.reduce((valorAnterior, valorAtual) => {
                                return valorAnterior + valorAtual
                            }, 0)
                            resultado.innerHTML = soma
                            break;
                        default:
                            break;
                    }
                }else{
                    alert("A base binária só pode conter apenas o dígitos 0 e 1.")
                }
                break;
            case "oct":
                switch (baseConversora) {
                    case "bin":
                        
                        break;
                    case "dec":
                        
                        break;
                
                    default:
                        break;
                }
                break;
            case "dec":
                switch (baseConversora) {
                    case "bin":
                        
                        break;
                    case "oct":
                        
                        break;
                
                    default:
                        break;
                }
                break;
            default:
                switch (baseConversora) {
                    case "bin":
                        
                        break;
                    case "oct":
                        
                        break;
                
                    default:
                        break;
                }
                break;
        }
    }else{
        resultado.innerHTML = baseConvertida_valor
    }
}