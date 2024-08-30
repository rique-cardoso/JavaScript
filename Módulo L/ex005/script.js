function converterBases() {
    const baseConvertida = document.querySelector("#convertido").value
    const baseConversora = document.querySelector("#conversor").value
    const baseConvertida_valor = Number(document.querySelector("#valorConvertido").value)
    let resultado = document.querySelector("#resultado")
    if(baseConvertida != baseConversora){
        switch (baseConvertida) {
            case "bin":
                switch (baseConversora) {
                    case "oct":
                        
                        break;
                    case "dec":
                        
                        break;
                
                    default:
                        break;
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