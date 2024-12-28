const div_relogio = document.querySelector('#div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')
let som_alarme =  new Audio("./audio/alarm.mp3")
som_alarme.loop = -1
let timestamp_atual = null
let timestamp_alarme = null
let alarme_ativado = false
let alarme_tocando = false
btn_ativar.addEventListener('click', e => {
    timestamp_atual = Date.now()
    timestamp_alarme = timestamp_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const data_alarme = new Date(timestamp_alarme)
    const data_alarme_horas = data_alarme.getHours() < 10 ? `0${data_alarme.getHours()}` : data_alarme.getHours()
    const data_alarme_minutos = data_alarme.getMinutes() < 10 ? `0${data_alarme.getMinutes()}` : data_alarme.getMinutes()
    const data_alarme_segundos = data_alarme.getSeconds() < 10 ? `0${data_alarme.getSeconds()}` : data_alarme.getSeconds()
    hora_alarme.innerHTML = `Hora do Alarme: ${data_alarme_horas}:${data_alarme_minutos}:${data_alarme_segundos}`
})
btn_parar.addEventListener('click', e => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0 //rebobina o áudio para o início
})
const relogio = () => {
    const data = new Date()
    const horas = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    const minutos = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const segundos = data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()
    div_relogio.textContent = `${horas}:${minutos}:${segundos}`
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= timestamp_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}
const intervalo = setInterval(relogio, 1000)