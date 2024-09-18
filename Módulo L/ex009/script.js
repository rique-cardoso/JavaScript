// Seleciona todos os inputs de tipo "number" e os selects
const inputs = document.querySelectorAll('input[type="number"]');
const selects = document.querySelectorAll('select');

// Função para realizar a conversão
function executarConversao() {
    const inputA = Number(document.querySelector("#inputA").value);
    const inputB = Number(document.querySelector("#inputB").value);
    const tempA = document.querySelector("#tempA").value;
    const tempB = document.querySelector("#tempB").value;

    // Se o input A foi alterado ou algum select, converta e mostre no input B
    if (document.activeElement.id === "inputA" || document.activeElement.id === "tempA" || document.activeElement.id === "tempB") {
        const resultado = converterTemperatura(tempA, tempB, inputA);
        document.querySelector("#inputB").value = resultado;
    }
    // Se o input B foi alterado ou algum select, converta e mostre no input A
    else if (document.activeElement.id === "inputB" || document.activeElement.id === "tempA" || document.activeElement.id === "tempB") {
        const resultado = converterTemperatura(tempB, tempA, inputB);
        document.querySelector("#inputA").value = resultado;
    }
}

// Adiciona o evento "change" aos inputs de tipo "number"
inputs.forEach(input => {
    input.addEventListener('input', executarConversao);  // Alterado para 'input' para atualizar enquanto digita
});

// Adiciona o evento "change" aos selects
selects.forEach(select => {
    select.addEventListener('change', executarConversao);
});

// Função de conversão de temperatura
function converterTemperatura(convertido, conversor, valor) {
    let resultado
    switch (convertido) {
        case "cel":
            switch (conversor) {
                case "fah":
                    resultado = (valor * 9 / 5) + 32;
                    break;
                case "kel":
                    resultado = valor + 273.15;
                    break;
                default:
                    resultado = valor;
                    break;
            }
        break;
        case "fah":
            switch (conversor) {
                case "cel":
                    resultado = (valor - 32) * 5 / 9;
                    break;
                case "kel":
                    resultado = ((valor - 32) * 5 / 9) + 273.15;
                    break;
                default:
                    resultado = valor;
                    break;
            }
        break;
        default: // "kel"
            switch (conversor) {
                case "cel":
                    resultado = valor - 273.15;
                    break;
                case "fah":
                    resultado = ((valor - 273.15) * 9 / 5) + 32;
                    break;
                default:
                    resultado = valor;
                    break;
            }
        break;
    }
    return resultado.toFixed(2)
}
