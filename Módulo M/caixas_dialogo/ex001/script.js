const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')
btn_alert.addEventListener('click', e => {
    alert('Olá, como você está?')
})
btn_confirm.addEventListener('click', e => {
    const retorno_confirm = confirm('Você está aprendendo muito?')
    if(retorno_confirm){
        console.log('Botão OK pressionado')
    }else{
        console.log('Botão CANCELAR pressionado')
    }
})
btn_prompt.addEventListener('click', e => {
    const nome = prompt('Digite seu nome', 'Digite seu nome aqui.') //segundo parâmetro é um valor padrão que podemos definir para já vir preenchido no prompt
    if(nome == ''){
        console.log('Botão CANCELAR pressionado')
    }else{
        console.log(nome)
    }
})