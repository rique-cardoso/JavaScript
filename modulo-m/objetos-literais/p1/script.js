const objetos = document.querySelector('#objetos')

// Criação de um objeto literal
const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb'
}

// Mostrando no DOM
// objetos.innerHTML = `${computador.cpu} - ${computador.ram} - ${computador.hd}`
objetos.innerHTML = JSON.stringify(computador)