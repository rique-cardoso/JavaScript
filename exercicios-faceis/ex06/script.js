function resultado() {
    let golsTimeA = Number(document.getElementById("gols1").value)
    let golsTimeB = Number(document.getElementById("gols2").value)

    if(golsTimeA > golsTimeB){
        alert("Real Madrid é o vencedor")
    }else if(golsTimeB > golsTimeA){
        alert("Barcelona é o vencedor")
    }else{
        alert("Empate")
    }
}