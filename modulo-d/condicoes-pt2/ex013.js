var agora = new Date()
/*
    DOMINGO: 0
    SEGUNDA: 1
    TERÇA: 2
    QUARTA: 3
    QUINTA: 4
    SEXTA: 5
    SÁBADO: 6
*/
switch(agora.getDay()){
    case 0:
        console.log("DOMINGO")
        break
    case 1:
        console.log("SEGUNDA-FEIRA")
        break
    case 2:
        console.log("TERÇA-FEIRA")
        break
    case 3:
        console.log("QUARTA-FEIRA")
        break
    case 4:
        console.log("QUINTA-FEIRA")
        break
    case 5:
        console.log("SEXTA-FEIRA")
        break
    default:
        console.log("SÁBADÃOOOO")
        break
}