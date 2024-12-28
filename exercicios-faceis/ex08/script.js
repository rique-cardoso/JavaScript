function valor() {
    const select = document.getElementById("opcoes").value;
    const litros = Number(document.getElementById("litros").value)

    if (select === "Gasolina") {
        var valor = litros * 3.3
        const valor_formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        alert(`Preço final ${valor_formatado}`)
    } else {
        var valor = litros * 2.9
        const valor_formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        alert(`Preço final ${valor_formatado}`)
    }
}