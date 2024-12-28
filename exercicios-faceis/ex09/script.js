function operacao() {
    const idadeHomem1 = Number(document.getElementById("idade1").value)
    const idadeHomem2 = Number(document.getElementById("idade2").value)
    const idadeMulher1 = Number(document.getElementById("idade3").value)
    const idadeMulher2 = Number(document.getElementById("idade4").value)

    let homemVelho = idadeHomem1 > idadeHomem2 ? idadeHomem1 : idadeHomem2
    let homemNovo = homemVelho == idadeHomem1 ? idadeHomem2 : idadeHomem1
    let mulherVelha = idadeMulher1 > idadeMulher2 ? idadeMulher1 : idadeMulher2
    let mulherNova = mulherVelha == idadeMulher1 ? idadeMulher2 : idadeMulher1

    alert(homemVelho + mulherNova)
    alert(homemNovo * mulherNova)
}