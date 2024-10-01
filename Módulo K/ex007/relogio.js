const div_relogio = document.querySelector('#div_relogio')
const relogio = () => {
    const data = new Date()
    const horas = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    const minutos = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const segundos = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()
    div_relogio.textContent = `${horas}:${minutos}:${segundos}`
}
const intervalo = setInterval(relogio, 1000)