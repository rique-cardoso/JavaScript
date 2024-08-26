function tabuada() {
    var num = Number(window.document.getElementById("numero").value)
    var tabuada = window.document.getElementById("tabuada")
    tabuada.innerHTML = ''
    for(var i = 0; i <= 10; i++){
        var item = window.document.createElement('option')
        item.text = `${i} x ${num} = ${num * i}`
        tabuada.appendChild(item)
    }
}