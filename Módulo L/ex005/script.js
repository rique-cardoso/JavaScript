function converterBases() {
    const baseConvertida = document.querySelector("#convertido").value
    const baseConversora = document.querySelector("#conversor").value
    const baseConvertida_valor = [...document.querySelector("#valorConvertido").value]
    let resultado = document.querySelector("#resultado")
    if(baseConvertida != baseConversora){
        switch (baseConvertida) {
            case "bin":
                if(baseConvertida_valor.every(elem => elem <= 1 && elem >= 0)){
                    switch (baseConversora) {
                        case "oct":
                            
                            break;
                        case "dec":
                            
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