function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#BF826B'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#F2B705'
    }else{
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#011826'
    }
}