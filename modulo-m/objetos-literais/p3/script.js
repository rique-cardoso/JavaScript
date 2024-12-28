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

// Remoção de propriedades de um objeto
delete(computador.hd)

// Clonagem de objeto
const c1 = Object.assign({}, computador)
c1.info() //Undefined em hd

// Criando um objeto apartir de outro
const c2 = Object.create(computador)
c2.cpu = 'i9'
c2.ram = '32gb'
c3.hd = '2tb'
c2.info()

// Merge de objetos
const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3) // Fazendo Merge
console.log(o4)

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