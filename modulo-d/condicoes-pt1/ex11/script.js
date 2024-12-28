function naturalidade(){
    var origem = window.document.querySelector('input#txtnaturalidade')
    origem = origem.value
    var res = window.document.querySelector('p#resultado')
    if(origem == "Brasil"){
        res.innerHTML = "<p>Você é <strong>brasileiro</strong>.</p>"
    }else{
        res.innerHTML = "<p>Você é <strong>estrangeiro</strong>.</p>"
    }

    res.innerHTML += "<p>Um salve pra saber o que ta acontecendo fora da estrutura condicional.</p>"
}