//addEventListener()
//Eventos podem ser apontados diretamente no arquivo HTML ou JS

//obtendo elemento que quero manipular
//const c1 = document.querySelector('#c1')

//adicionando um evento
//c1.addEventListener('click', msg) //addEventListener é como um escutador de eventos, recebe dois parâmetros, qual o tipo de evento que será monitorado em determinado elemento e qual a função ou o que será executado quando este evento acontecer

/* function msg(params) {
    alert("Clicou")
} */

//Posso adicionar um evento utilizando uma função anônima

/* c1.addEventListener('click', (evt) => {
    //alert("clicou")
    
    //msg() => posso também chamar uma função utilizando função anônima
    
    //console.log(evt.target)//consigo capturar quem disparou o evento

    const el = evt.target
    el.classList.add("destaque")
}) */

//CHAMDNO UM EVENTO PARA TODOS OS CURSOS

const cursos = [...document.querySelectorAll('.curso')]

cursos.map((elem) => {
    elem.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add("destaque")
        console.log(el.id + " foi clicado")
        alert(el.innerHTML)
    })
})