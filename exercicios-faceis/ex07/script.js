function bissexto() {
    let data = document.getElementById("ano").value
    let ano = new Date(data).getFullYear()
    let teste1 = ano % 4 == 0
    let teste2 = ano % 100 == 0
    let teste3 = ano % 400 == 0

    if ((teste1 == true && teste2 == true ** teste3 == true) || (teste1 == true && teste2 == false)) {
        alert("Este ano é bissexto")
    } else {
        alert("Este ano não é bissexto")
    }
}