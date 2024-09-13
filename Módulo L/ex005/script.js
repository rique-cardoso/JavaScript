function repete([...valor_base_convertida]) {
    return valor_base_convertida.join('')
}
function validaBinario(valorBinario) {
    const regex = /^[01]+$/
    return regex.test(valorBinario)
}
function validaOctal(valorOctal) {
    const regex = /^[0-7]+$/
    return regex.test(valorOctal)
}
function validaDecimal(valorDecimal) {
    const regex = /^[0-9]+$/
}
function validaHexadecimal(valorHex) {
    const regex = /^[0-9a-fA-F]+$/
    return regex.test(valorHex)
}
function converterBases() {
    const baseConvertida = document.querySelector("#convertido").value
    const baseConversora = document.querySelector("#conversor").value
    const baseConvertida_valor = document.querySelector("#valorConvertido").value
    let resultado = document.querySelector("#resultado")
    if (baseConvertida != baseConversora) {
        switch (baseConvertida) {
            case "bin":
                if (validaBinario(baseConvertida_valor)) {
                    decimalCorrespondente_bin = parseInt(baseConvertida_valor, 2)
                    switch (baseConversora) {
                        case "oct":
                            resultado.innerHTML = decimalCorrespondente_bin.toString(8)
                            break;
                        case "dec":
                            resultado.innerHTML = decimalCorrespondente_bin
                            break;
                        default:
                            resultado.innerHTML = decimalCorrespondente_bin.toString(16).toUpperCase()
                            break;
                    }
                } else {
                    //SE O VALOR NÃO FOR UM NÚMERO BINÁRIO, APRESENTA MSG DE ERRO
                    alert("A base binária pode conter apenas os dígitos 0 e 1.")
                }
                break;
            case "oct":
                if(validaOctal(baseConvertida_valor)){
                    let decimalCorrespondente_oct = parseInt(baseConvertida_valor, 8)
                    switch (baseConversora) {
                        case "bin":
                            resultado.innerHTML = decimalCorrespondente_oct.toString(2)
                            break;
                        case "dec":
                            resultado.innerHTML = decimalCorrespondente_oct
                            break;
                        default:
                            resultado.innerHTML = decimalCorrespondente_oct.toString(16).toUpperCase()
                            break;
                    }
                    break;
                }else{
                    //SE O VALOR NÃO FOR UM NÚMERO OCTAL, APRESENTA MSG DE ERRO
                    alert("A base octal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6 e 7")
                }
                break;
            case "dec":
                if(validaDecimal(baseConvertida_valor)){
                    switch (baseConversora) {
                        case "bin":
                            resultado.innerHTML = Number(baseConvertida_valor).toString(2)
                            break;
                        case "oct":
                            resultado.innerHTML = Number(baseConvertida_valor).toString(8)
                            break;
                        default:
                            resultado.innerHTML = Number(baseConvertida_valor).toString(16).toUpperCase()
                            break;
                    }
                }else{
                    alert("A base decimal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.")
                }
                break;
            default:
                if(validaHexadecimal(baseConvertida_valor)){
                    let decimalCorrespondente_hex = parseInt(baseConvertida_valor, 16)
                    switch (baseConversora) {
                        case "bin":
                            resultado.innerHTML = decimalCorrespondente_hex.toString(2)
                            break;
                        case "oct":
                            resultado.innerHTML = decimalCorrespondente_hex.toString(8)
                            break;
                        default:
                            resultado.innerHTML = decimalCorrespondente_hex
                            break;
                    }
                }else{
                    alert("A base hexadecimal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E e F.")
                }
                break;
        }
    } else { //se forem iguais ele irá mostrar a mesma entrada no resultado
        switch (baseConvertida) {
            case "bin":
                if(validaBinario(baseConvertida_valor)){
                    resultado.innerHTML = repete(baseConvertida_valor)
                }else{
                    alert("A base binária pode conter apenas os dígitos 0 e 1.")
                }
                break;
            case "oct":
                if(validaOctal(baseConvertida_valor)){
                    resultado.innerHTML = repete(baseConvertida_valor)
                }else{
                    alert("A base octal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6 e 7")
                }
                break;
            case "dec":
                if(validaDecimal(baseConvertida_valor)){
                    resultado.innerHTML = repete(baseConvertida_valor)
                }else{
                    alert("A base decimal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.")
                }
                break;
            default:
                if(validaHexadecimal(baseConvertida_valor)){
                    resultado.innerHTML = repete(baseConvertida_valor)
                }else{
                    alert("A base hexadecimal pode conter apenas os dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E e F.")
                }
                break;
        }
    }
}