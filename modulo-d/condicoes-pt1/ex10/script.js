function calcular(){
    var txt_vel = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txt_vel.value)
    if(vel > 60){
        res.innerHTML = "<p>Você foi multado por excesso de velocidade.</p>"
    }
    res.innerHTML += "<p>Dirija sempre com o cinto de segurança</p>"
}