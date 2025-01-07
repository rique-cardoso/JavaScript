const sendBtn = document.querySelector('#sendBtn')
const getBtn = document.querySelector('#getBtn')
const userInput = document.querySelector('#userInput')
const responseText = document.querySelector('#response')
const getResponseText = document.querySelector('#getResponse')
// Requisição POST
sendBtn.addEventListener('click', e => {
    input = userInput.value
    fetch('http://127.0.0.1:5000/process', { // URL do back-end
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }), // Envia os dados como JSON
    })
        .then(response => response.json())
        .then(data => {
            responseText.textContent = data.message // Exibe a resposta no front
        })
        .catch(error => console.error('Erro: ', error))
})
// Requisição GET
getBtn.addEventListener('click', e => {
    fetch('http://127.0.0.1:5000/fetch-data', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            getResponseText.textContent = data.message
        })
        .catch(error => console.error('Erro: ', error))
})