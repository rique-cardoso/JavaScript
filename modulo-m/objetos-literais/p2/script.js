const objetos = document.querySelector('#objetos')

// Criação de um objeto literal
const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb',
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

// Adicionando novas propriedades:
computdor["monitor"] = "22pol"
computador.placaVideo = "rtx"

//Array de objetos literais
const computadores = [
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    }
]
// computador.info()
// Mostrando no DOM
// objetos.innerHTML = `${computador.cpu} - ${computador.ram} - ${computador.hd}`
// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach(comp => {
    const div = document.createElement('div')
    div.innerHTML = `${comp.cpu}<br/>${comp.ram}<br/>${comp.hd}`
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})